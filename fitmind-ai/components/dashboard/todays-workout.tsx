import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Dumbbell, Play, RotateCcw } from "lucide-react";

export default function TodaysWorkout() {
  const exercises = [
    { name: "Dumbbell Bench Press", sets: "3", reps: "10", completed: true },
    { name: "Incline Dumbbell Press", sets: "3", reps: "10", completed: true },
    { name: "Chest Flyes", sets: "3", reps: "12", completed: false },
    { name: "Tricep Pushdown", sets: "3", reps: "12", completed: false },
    { name: "Overhead Tricep Extension", sets: "3", reps: "12", completed: false },
  ];
  
  const completedExercises = exercises.filter(ex => ex.completed).length;
  const progress = (completedExercises / exercises.length) * 100;
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-bold">Today's Workout</CardTitle>
        <Dumbbell className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Upper Body Focus</span>
            <span className="text-sm text-muted-foreground">40 min</span>
          </div>
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>{completedExercises} of {exercises.length} exercises completed</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
        
        <div className="space-y-2">
          {exercises.map((exercise, index) => (
            <div key={index} className={`flex items-center justify-between rounded-md p-2 ${exercise.completed ? "bg-muted/40 text-muted-foreground" : ""}`}>
              <div className="flex items-center gap-2">
                {exercise.completed ? (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <span className="text-xs">✓</span>
                  </div>
                ) : (
                  <div className="flex h-5 w-5 items-center justify-center rounded-full border border-primary/50 text-primary">
                    <span className="text-xs">{index + 1}</span>
                  </div>
                )}
                <span className="text-sm">{exercise.name}</span>
              </div>
              <span className="text-xs">{exercise.sets}×{exercise.reps}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button className="w-full gap-1">
          <Play className="h-4 w-4" />
          Continue Workout
        </Button>
      </CardFooter>
    </Card>
  );
}