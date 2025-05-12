"use client"

import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Activity } from "lucide-react";

interface MuscleGroup {
  id: string;
  name: string;
  fatigue_level: number;
  last_worked: string;
  recovery_time: number;
  category: string;
}

export default function MuscleFatigue() {
  const [muscleGroups, setMuscleGroups] = useState<MuscleGroup[]>([
    // Chest
    { id: "1", name: "Pectoralis Major", fatigue_level: 80, last_worked: "2024-03-10", recovery_time: 48, category: "Chest" },
    { id: "2", name: "Pectoralis Minor", fatigue_level: 75, last_worked: "2024-03-10", recovery_time: 48, category: "Chest" },
    { id: "3", name: "Serratus Anterior", fatigue_level: 65, last_worked: "2024-03-10", recovery_time: 48, category: "Chest" },
    
    // Back
    { id: "4", name: "Latissimus Dorsi", fatigue_level: 60, last_worked: "2024-03-09", recovery_time: 48, category: "Back" },
    { id: "5", name: "Trapezius", fatigue_level: 55, last_worked: "2024-03-09", recovery_time: 48, category: "Back" },
    { id: "6", name: "Rhomboids", fatigue_level: 50, last_worked: "2024-03-09", recovery_time: 48, category: "Back" },
    { id: "7", name: "Erector Spinae", fatigue_level: 45, last_worked: "2024-03-09", recovery_time: 48, category: "Back" },
    
    // Legs
    { id: "8", name: "Quadriceps", fatigue_level: 90, last_worked: "2024-03-11", recovery_time: 72, category: "Legs" },
    { id: "9", name: "Hamstrings", fatigue_level: 85, last_worked: "2024-03-11", recovery_time: 72, category: "Legs" },
    { id: "10", name: "Calves", fatigue_level: 80, last_worked: "2024-03-11", recovery_time: 48, category: "Legs" },
    { id: "11", name: "Glutes", fatigue_level: 85, last_worked: "2024-03-11", recovery_time: 72, category: "Legs" },
    
    // Shoulders
    { id: "12", name: "Deltoids (Anterior)", fatigue_level: 40, last_worked: "2024-03-08", recovery_time: 48, category: "Shoulders" },
    { id: "13", name: "Deltoids (Lateral)", fatigue_level: 35, last_worked: "2024-03-08", recovery_time: 48, category: "Shoulders" },
    { id: "14", name: "Deltoids (Posterior)", fatigue_level: 30, last_worked: "2024-03-08", recovery_time: 48, category: "Shoulders" },
    { id: "15", name: "Rotator Cuff", fatigue_level: 25, last_worked: "2024-03-08", recovery_time: 48, category: "Shoulders" },
    
    // Arms
    { id: "16", name: "Biceps Brachii", fatigue_level: 30, last_worked: "2024-03-08", recovery_time: 24, category: "Arms" },
    { id: "17", name: "Triceps Brachii", fatigue_level: 35, last_worked: "2024-03-08", recovery_time: 24, category: "Arms" },
    { id: "18", name: "Brachialis", fatigue_level: 25, last_worked: "2024-03-08", recovery_time: 24, category: "Arms" },
    { id: "19", name: "Forearms", fatigue_level: 20, last_worked: "2024-03-08", recovery_time: 24, category: "Arms" },
    
    // Core
    { id: "20", name: "Rectus Abdominis", fatigue_level: 50, last_worked: "2024-03-09", recovery_time: 24, category: "Core" },
    { id: "21", name: "Obliques", fatigue_level: 45, last_worked: "2024-03-09", recovery_time: 24, category: "Core" },
    { id: "22", name: "Transverse Abdominis", fatigue_level: 40, last_worked: "2024-03-09", recovery_time: 24, category: "Core" },
    { id: "23", name: "Erector Spinae", fatigue_level: 35, last_worked: "2024-03-09", recovery_time: 24, category: "Core" },
  ]);

  const getFatigueColor = (level: number) => {
    if (level >= 80) return "bg-red-500";
    if (level >= 60) return "bg-orange-500";
    if (level >= 40) return "bg-yellow-500";
    return "bg-green-500";
  };

  const getRecoveryStatus = (level: number) => {
    if (level >= 80) return "Needs Rest";
    if (level >= 60) return "Recovering";
    if (level >= 40) return "Moderate";
    return "Ready";
  };

  // Group muscles by category
  const groupedMuscles = muscleGroups.reduce((acc, muscle) => {
    if (!acc[muscle.category]) {
      acc[muscle.category] = [];
    }
    acc[muscle.category].push(muscle);
    return acc;
  }, {} as Record<string, MuscleGroup[]>);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-bold">Muscle Fatigue</CardTitle>
        <Activity className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent className="space-y-6">
        {Object.entries(groupedMuscles).map(([category, muscles]) => (
          <div key={category} className="space-y-3">
            <h3 className="text-sm font-semibold text-muted-foreground">{category}</h3>
            {muscles.map((muscle) => (
              <div key={muscle.id} className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{muscle.name}</span>
                  <span className="text-muted-foreground">{getRecoveryStatus(muscle.fatigue_level)}</span>
                </div>
                <div className="relative h-2">
                  <Progress 
                    value={muscle.fatigue_level} 
                    className={`h-2 ${getFatigueColor(muscle.fatigue_level)}`}
                  />
                </div>
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}