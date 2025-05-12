"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, Brain, Activity, Settings } from "lucide-react";
import Image from "next/image";

export default function WorkoutsFeature() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Smart Workout Planning
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get personalized workout plans that adapt to your goals, equipment, and recovery needs.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/4164761/pexels-photo-4164761.jpeg"
            alt="Smart workout planning"
            width={800}
            height={1000}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm">
            <div className="text-lg font-semibold">Transform Your Training</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Experience the power of AI-driven workout optimization
            </p>
            <Button className="mt-4">Start Training</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Key Features</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <Brain className="h-6 w-6 text-primary" />
                <CardTitle>AI Workout Generation</CardTitle>
                <CardDescription>
                  Get workouts tailored to your goals and available equipment
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Activity className="h-6 w-6 text-primary" />
                <CardTitle>Fatigue Monitoring</CardTitle>
                <CardDescription>
                  Track muscle fatigue and optimize recovery between workouts
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Settings className="h-6 w-6 text-primary" />
                <CardTitle>Exercise Customization</CardTitle>
                <CardDescription>
                  Modify workouts based on injuries or preferences
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Dumbbell className="h-6 w-6 text-primary" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Monitor your strength gains and workout consistency
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}