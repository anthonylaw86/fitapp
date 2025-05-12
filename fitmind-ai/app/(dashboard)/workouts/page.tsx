"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { ChevronDown, ChevronUp, Dumbbell, Play, RefreshCw, RotateCcw, Sparkles } from "lucide-react";
import Image from "next/image";

export default function WorkoutsPage() {
  const [expandedWorkout, setExpandedWorkout] = useState<string | null>(null);
  
  const toggleWorkout = (workoutId: string) => {
    if (expandedWorkout === workoutId) {
      setExpandedWorkout(null);
    } else {
      setExpandedWorkout(workoutId);
    }
  };
  
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const workoutPlan = {
    monday: {
      id: "mon-workout",
      title: "Upper Body Strength",
      description: "Focus on chest, shoulders, and triceps with compound movements",
      duration: "45 min",
      difficulty: "Intermediate",
      equipment: ["Dumbbells", "Bench", "Resistance Bands"],
      image: "https://images.pexels.com/photos/4162451/pexels-photo-4162451.jpeg",
      exercises: [
        {
          name: "Dumbbell Bench Press",
          sets: 3,
          reps: "10-12",
          rest: "60 sec",
          image: "https://images.pexels.com/photos/3837757/pexels-photo-3837757.jpeg"
        },
        {
          name: "Incline Dumbbell Press",
          sets: 3,
          reps: "10-12",
          rest: "60 sec",
          image: "https://images.pexels.com/photos/6550851/pexels-photo-6550851.jpeg"
        },
        {
          name: "Seated Dumbbell Shoulder Press",
          sets: 3,
          reps: "10-12",
          rest: "60 sec",
          image: "https://images.pexels.com/photos/7690098/pexels-photo-7690098.jpeg"
        },
        {
          name: "Tricep Pushdowns",
          sets: 3,
          reps: "12-15",
          rest: "45 sec",
          image: "https://images.pexels.com/photos/6551138/pexels-photo-6551138.jpeg"
        },
        {
          name: "Lateral Raises",
          sets: 3,
          reps: "12-15",
          rest: "45 sec",
          image: "https://images.pexels.com/photos/4162446/pexels-photo-4162446.jpeg"
        }
      ]
    },
    tuesday: {
      id: "tue-workout",
      title: "Core & Mobility",
      description: "Focus on core strength and overall mobility",
      duration: "30 min",
      difficulty: "Beginner-Intermediate",
      equipment: ["Mat", "Resistance Bands"],
      image: "https://images.pexels.com/photos/999309/pexels-photo-999309.jpeg",
      exercises: []
    },
    wednesday: {
      id: "wed-workout",
      title: "Lower Body Focus",
      description: "Build strength in quads, hamstrings, and glutes",
      duration: "50 min",
      difficulty: "Intermediate",
      equipment: ["Dumbbells", "Bench"],
      image: "https://images.pexels.com/photos/6550873/pexels-photo-6550873.jpeg",
      exercises: []
    },
    thursday: {
      id: "thu-workout",
      title: "Rest Day",
      description: "Active recovery or light stretching recommended",
      duration: "0 min",
      difficulty: "Easy",
      equipment: [],
      image: "https://images.pexels.com/photos/6551176/pexels-photo-6551176.jpeg",
      exercises: []
    },
    friday: {
      id: "fri-workout",
      title: "Upper Body Pull",
      description: "Focus on back and biceps with pulling movements",
      duration: "45 min",
      difficulty: "Intermediate",
      equipment: ["Dumbbells", "Resistance Bands"],
      image: "https://images.pexels.com/photos/4162452/pexels-photo-4162452.jpeg",
      exercises: []
    },
    saturday: {
      id: "sat-workout",
      title: "HIIT Cardio",
      description: "High-intensity interval training for cardiovascular fitness",
      duration: "25 min",
      difficulty: "Challenging",
      equipment: ["Mat", "Timer"],
      image: "https://images.pexels.com/photos/6551135/pexels-photo-6551135.jpeg",
      exercises: []
    },
    sunday: {
      id: "sun-workout",
      title: "Rest Day",
      description: "Complete rest or gentle walking/yoga recommended",
      duration: "0 min",
      difficulty: "Easy",
      equipment: [],
      image: "https://images.pexels.com/photos/6551088/pexels-photo-6551088.jpeg",
      exercises: []
    }
  };
  
  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Workout Plans</h1>
        <p className="text-muted-foreground">
          Your AI-generated workout plans based on your fitness goals, available equipment, and recovery needs.
        </p>
      </div>
      
      <div className="mb-6 flex items-center gap-4">
        <Button className="gap-2">
          <Play className="h-4 w-4" />
          Start Today's Workout
        </Button>
        <Button variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Regenerate Plan
        </Button>
      </div>
      
      <Tabs defaultValue="monday" className="space-y-6">
        <TabsList className="w-full justify-start overflow-x-auto">
          {weekdays.map((day) => (
            <TabsTrigger key={day} value={day.toLowerCase()}>
              {day}
            </TabsTrigger>
          ))}
        </TabsList>
        
        {weekdays.map((day) => (
          <TabsContent key={day} value={day.toLowerCase()} className="space-y-4">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <CardTitle>{day}'s Workout</CardTitle>
                </div>
                <CardDescription>
                  Tailored to your fitness goals and recovery status
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div 
                  className="flex cursor-pointer items-center gap-4"
                  onClick={() => toggleWorkout(workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].id)}
                >
                  <div className="relative h-24 w-32 overflow-hidden rounded-md">
                    <Image
                      src={workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].image}
                      alt={workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].title}
                      width={128}
                      height={96}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-medium">
                      {workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].description}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <Badge variant="outline">
                        {workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].duration}
                      </Badge>
                      <Badge variant="outline">
                        {workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].difficulty}
                      </Badge>
                      {workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].equipment.map((item, i) => (
                        <Badge key={i} variant="outline">{item}</Badge>
                      ))}
                    </div>
                  </div>
                  {expandedWorkout === workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                
                {expandedWorkout === workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].id && 
                 workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].exercises.length > 0 && (
                  <div className="mt-6">
                    <Separator className="mb-6" />
                    <div className="space-y-4">
                      {workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].exercises.map((exercise, index) => (
                        <div key={index} className="rounded-lg border p-4">
                          <div className="flex items-start gap-4">
                            <div className="relative h-20 w-20 overflow-hidden rounded-md">
                              <Image
                                src={exercise.image}
                                alt={exercise.name}
                                width={80}
                                height={80}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2">
                                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                                  <span className="text-xs">{index + 1}</span>
                                </div>
                                <h4 className="font-medium">{exercise.name}</h4>
                              </div>
                              <div className="mt-2 grid grid-cols-3 gap-2 text-sm">
                                <div>
                                  <span className="text-muted-foreground">Sets: </span>
                                  <span>{exercise.sets}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Reps: </span>
                                  <span>{exercise.reps}</span>
                                </div>
                                <div>
                                  <span className="text-muted-foreground">Rest: </span>
                                  <span>{exercise.rest}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-end gap-2">
                {workoutPlan[day.toLowerCase() as keyof typeof workoutPlan].title !== "Rest Day" && (
                  <>
                    <Button variant="outline">Modify Workout</Button>
                    <Button>Start Workout</Button>
                  </>
                )}
              </CardFooter>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}