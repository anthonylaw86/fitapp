/*
  # Fitness Tracking Schema

  1. New Tables
    - `muscle_groups`
      - `id` (uuid, primary key)
      - `name` (text)
      - `recovery_time` (int) - hours needed for recovery
      - `last_worked` (timestamptz)
      - `fatigue_level` (int) - 0-100 scale
      - `user_id` (uuid) - references auth.users
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `workouts`
      - `id` (uuid, primary key)
      - `user_id` (uuid) - references auth.users
      - `date` (date)
      - `type` (text)
      - `completed` (boolean)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `workout_exercises`
      - `id` (uuid, primary key)
      - `workout_id` (uuid) - references workouts
      - `name` (text)
      - `sets` (int)
      - `reps` (text)
      - `weight` (numeric)
      - `muscle_group_id` (uuid) - references muscle_groups
      - `completed` (boolean)
      - `created_at` (timestamptz)

    - `meal_plans`
      - `id` (uuid, primary key)
      - `user_id` (uuid) - references auth.users
      - `date` (date)
      - `meal_type` (text)
      - `name` (text)
      - `calories` (int)
      - `protein` (int)
      - `carbs` (int)
      - `fat` (int)
      - `completed` (boolean)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to manage their own data
*/

-- Create muscle_groups table
CREATE TABLE IF NOT EXISTS muscle_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  recovery_time int NOT NULL,
  last_worked timestamptz,
  fatigue_level int DEFAULT 0,
  user_id uuid REFERENCES auth.users NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CONSTRAINT fatigue_level_range CHECK (fatigue_level >= 0 AND fatigue_level <= 100)
);

-- Create workouts table
CREATE TABLE IF NOT EXISTS workouts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  date date NOT NULL,
  type text NOT NULL,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create workout_exercises table
CREATE TABLE IF NOT EXISTS workout_exercises (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  workout_id uuid REFERENCES workouts ON DELETE CASCADE NOT NULL,
  name text NOT NULL,
  sets int NOT NULL,
  reps text NOT NULL,
  weight numeric,
  muscle_group_id uuid REFERENCES muscle_groups NOT NULL,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create meal_plans table
CREATE TABLE IF NOT EXISTS meal_plans (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  date date NOT NULL,
  meal_type text NOT NULL,
  name text NOT NULL,
  calories int NOT NULL,
  protein int NOT NULL,
  carbs int NOT NULL,
  fat int NOT NULL,
  completed boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE muscle_groups ENABLE ROW LEVEL SECURITY;
ALTER TABLE workouts ENABLE ROW LEVEL SECURITY;
ALTER TABLE workout_exercises ENABLE ROW LEVEL SECURITY;
ALTER TABLE meal_plans ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can manage their own muscle groups"
  ON muscle_groups
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their own workouts"
  ON workouts
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can manage their own workout exercises"
  ON workout_exercises
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM workouts 
    WHERE workouts.id = workout_exercises.workout_id 
    AND workouts.user_id = auth.uid()
  ));

CREATE POLICY "Users can manage their own meal plans"
  ON meal_plans
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Create function to update muscle fatigue
CREATE OR REPLACE FUNCTION update_muscle_fatigue() RETURNS trigger AS $$
BEGIN
  UPDATE muscle_groups
  SET 
    last_worked = NOW(),
    fatigue_level = 100,
    updated_at = NOW()
  WHERE id = NEW.muscle_group_id
  AND EXISTS (
    SELECT 1 FROM workouts 
    WHERE workouts.id = NEW.workout_id 
    AND workouts.user_id = muscle_groups.user_id
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for updating muscle fatigue
CREATE TRIGGER update_muscle_fatigue_on_exercise
  AFTER INSERT OR UPDATE OF completed
  ON workout_exercises
  FOR EACH ROW
  WHEN (NEW.completed = true)
  EXECUTE FUNCTION update_muscle_fatigue();

-- Create function to decrease fatigue over time
CREATE OR REPLACE FUNCTION decrease_muscle_fatigue() RETURNS void AS $$
BEGIN
  UPDATE muscle_groups
  SET 
    fatigue_level = GREATEST(0, fatigue_level - 
      LEAST(100, EXTRACT(EPOCH FROM (NOW() - last_worked)) / (recovery_time * 3600) * 100)::int
    ),
    updated_at = NOW()
  WHERE last_worked IS NOT NULL
  AND fatigue_level > 0;
END;
$$ LANGUAGE plpgsql;