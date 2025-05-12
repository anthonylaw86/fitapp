"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Activity, TrendingUp, BarChart } from "lucide-react";
import Image from "next/image";

export default function TrackingFeature() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            Progress Tracking
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Track your fitness journey with detailed analytics and progress visualization.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Tracking Features</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <LineChart className="h-6 w-6 text-primary" />
                <CardTitle>Comprehensive Metrics</CardTitle>
                <CardDescription>
                  Track weight, measurements, and performance metrics
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Activity className="h-6 w-6 text-primary" />
                <CardTitle>Workout Analytics</CardTitle>
                <CardDescription>
                  Monitor volume, intensity, and progress over time
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <TrendingUp className="h-6 w-6 text-primary" />
                <CardTitle>Goal Tracking</CardTitle>
                <CardDescription>
                  Set and track progress towards your fitness goals
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <BarChart className="h-6 w-6 text-primary" />
                <CardTitle>Visual Reports</CardTitle>
                <CardDescription>
                  View your progress through intuitive charts and graphs
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/4498574/pexels-photo-4498574.jpeg"
            alt="Fitness tracking"
            width={800}
            height={1000}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm">
            <div className="text-lg font-semibold">Track Your Progress</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Visualize your fitness journey and celebrate your achievements
            </p>
            <Button className="mt-4">Start Tracking</Button>
          </div>
        </div>
      </div>
    </div>
  );
}