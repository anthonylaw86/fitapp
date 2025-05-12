"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardHeader from "@/components/dashboard/dashboard-header";
import DashboardMetrics from "@/components/dashboard/dashboard-metrics";
import TodaysWorkout from "@/components/dashboard/todays-workout";
import UpcomingMeals from "@/components/dashboard/upcoming-meals";
import WeeklyProgress from "@/components/dashboard/weekly-progress";
import MuscleFatigue from "@/components/dashboard/muscle-fatigue";
import { Brain, RefreshCw } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      <DashboardHeader />
      
      <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
        <div className="flex justify-end gap-2">
          <Button variant="outline" className="gap-2">
            <Brain className="h-4 w-4" />
            Generate Meal Plan
          </Button>
          <Button variant="outline" className="gap-2">
            <RefreshCw className="h-4 w-4" />
            Generate Workouts
          </Button>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <DashboardMetrics />
        </div>
        
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="md:col-span-1">
                <MuscleFatigue />
              </div>
              <div className="md:col-span-1">
                <TodaysWorkout />
              </div>
              <div className="md:col-span-1">
                <UpcomingMeals />
              </div>
            </div>
            <WeeklyProgress />
          </TabsContent>
          
          <TabsContent value="workouts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Workouts</CardTitle>
                <CardDescription>
                  View and manage your workout plans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your personalized workout content will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="nutrition" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Meal Planning</CardTitle>
                <CardDescription>
                  View and manage your nutrition plans
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your personalized nutrition content will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="progress" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>My Progress</CardTitle>
                <CardDescription>
                  Track your fitness journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your progress tracking data will appear here.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}