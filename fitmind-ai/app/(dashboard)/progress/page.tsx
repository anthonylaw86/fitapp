"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/ui/date-picker";
import { 
  Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, 
  ResponsiveContainer, Tooltip, XAxis, YAxis 
} from "recharts";
import { CalendarRange, FileEdit, Plus } from "lucide-react";

export default function ProgressPage() {
  // Weight tracking data
  const weightData = [
    { date: "Jan 1", weight: 185 },
    { date: "Jan 15", weight: 183 },
    { date: "Feb 1", weight: 181 },
    { date: "Feb 15", weight: 179 },
    { date: "Mar 1", weight: 178 },
    { date: "Mar 15", weight: 176 },
    { date: "Apr 1", weight: 175 },
  ];
  
  // Workout volume data
  const volumeData = [
    { date: "Week 1", chest: 3000, back: 3200, legs: 4500, shoulders: 2000, arms: 1800 },
    { date: "Week 2", chest: 3200, back: 3300, legs: 4600, shoulders: 2100, arms: 1900 },
    { date: "Week 3", chest: 3300, back: 3400, legs: 4700, shoulders: 2200, arms: 2000 },
    { date: "Week 4", chest: 3400, back: 3500, legs: 4800, shoulders: 2300, arms: 2100 },
    { date: "Week 5", chest: 3600, back: 3700, legs: 5000, shoulders: 2400, arms: 2200 },
    { date: "Week 6", chest: 3800, back: 3900, legs: 5200, shoulders: 2500, arms: 2300 },
  ];
  
  // Body measurements data
  const measurementsData = [
    { date: "Jan", chest: 42, waist: 36, hips: 40, thighs: 24, arms: 15 },
    { date: "Feb", chest: 42.5, waist: 35, hips: 40, thighs: 24.5, arms: 15.2 },
    { date: "Mar", chest: 43, waist: 34, hips: 39.5, thighs: 25, arms: 15.5 },
    { date: "Apr", chest: 43.5, waist: 33, hips: 39, thighs: 25.5, arms: 16 },
  ];
  
  // Nutrition adherence data
  const nutritionData = [
    { date: "Week 1", adherence: 75 },
    { date: "Week 2", adherence: 85 },
    { date: "Week 3", adherence: 80 },
    { date: "Week 4", adherence: 90 },
    { date: "Week 5", adherence: 95 },
    { date: "Week 6", adherence: 85 },
  ];
  
  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Progress Tracking</h1>
        <p className="text-muted-foreground">
          Track your fitness journey with detailed analytics and progress visualization.
        </p>
      </div>
      
      <div className="mb-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Plus className="h-4 w-4" />
            Add Measurement
          </Button>
          <Button variant="outline" className="gap-2">
            <FileEdit className="h-4 w-4" />
            Add Notes
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <CalendarRange className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Select date range:</span>
          <DatePicker />
        </div>
      </div>
      
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="w-full justify-start overflow-x-auto">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="weight">Weight</TabsTrigger>
          <TabsTrigger value="measurements">Measurements</TabsTrigger>
          <TabsTrigger value="workout">Workout Volume</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Weight Progress</CardTitle>
                <CardDescription>Track your weight changes over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={weightData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          color: 'hsl(var(--foreground))'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="weight" 
                        stroke="hsl(var(--chart-1))" 
                        strokeWidth={2}
                        name="Weight (lbs)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Body Measurements</CardTitle>
                <CardDescription>Changes in key body measurements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={measurementsData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          color: 'hsl(var(--foreground))'
                        }} 
                      />
                      <Line 
                        type="monotone" 
                        dataKey="chest" 
                        stroke="hsl(var(--chart-1))" 
                        strokeWidth={2}
                        name="Chest (in)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="waist" 
                        stroke="hsl(var(--chart-2))" 
                        strokeWidth={2}
                        name="Waist (in)"
                      />
                      <Line 
                        type="monotone" 
                        dataKey="arms" 
                        stroke="hsl(var(--chart-3))" 
                        strokeWidth={2}
                        name="Arms (in)"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Workout Volume By Muscle Group</CardTitle>
                <CardDescription>Track your training volume progress by muscle group</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={volumeData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          color: 'hsl(var(--foreground))'
                        }} 
                      />
                      <Bar dataKey="chest" fill="hsl(var(--chart-1))" name="Chest" />
                      <Bar dataKey="back" fill="hsl(var(--chart-2))" name="Back" />
                      <Bar dataKey="legs" fill="hsl(var(--chart-3))" name="Legs" />
                      <Bar dataKey="shoulders" fill="hsl(var(--chart-4))" name="Shoulders" />
                      <Bar dataKey="arms" fill="hsl(var(--chart-5))" name="Arms" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Nutrition Plan Adherence</CardTitle>
                <CardDescription>Track how well you're sticking to your nutrition plan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={nutritionData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip 
                        contentStyle={{ 
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          color: 'hsl(var(--foreground))'
                        }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="adherence" 
                        stroke="hsl(var(--chart-2))" 
                        fill="hsl(var(--chart-2)/0.2)" 
                        name="Adherence (%)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="weight" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Weight Tracking</CardTitle>
              <CardDescription>Detailed weight journey and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={weightData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={['dataMin - 5', 'dataMax + 5']} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--foreground))'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="weight" 
                      stroke="hsl(var(--chart-1))" 
                      strokeWidth={2}
                      name="Weight (lbs)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="measurements" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Body Measurements</CardTitle>
              <CardDescription>Track changes in your body composition</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={measurementsData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--foreground))'
                      }} 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="chest" 
                      stroke="hsl(var(--chart-1))" 
                      strokeWidth={2}
                      name="Chest (in)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="waist" 
                      stroke="hsl(var(--chart-2))" 
                      strokeWidth={2}
                      name="Waist (in)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="hips" 
                      stroke="hsl(var(--chart-3))" 
                      strokeWidth={2}
                      name="Hips (in)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="thighs" 
                      stroke="hsl(var(--chart-4))" 
                      strokeWidth={2}
                      name="Thighs (in)"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="arms" 
                      stroke="hsl(var(--chart-5))" 
                      strokeWidth={2}
                      name="Arms (in)"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="workout" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Workout Volume Progression</CardTitle>
              <CardDescription>Track your training volume progress</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={volumeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--foreground))'
                      }} 
                    />
                    <Bar dataKey="chest" fill="hsl(var(--chart-1))" name="Chest" />
                    <Bar dataKey="back" fill="hsl(var(--chart-2))" name="Back" />
                    <Bar dataKey="legs" fill="hsl(var(--chart-3))" name="Legs" />
                    <Bar dataKey="shoulders" fill="hsl(var(--chart-4))" name="Shoulders" />
                    <Bar dataKey="arms" fill="hsl(var(--chart-5))" name="Arms" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="nutrition" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Nutrition Adherence</CardTitle>
              <CardDescription>Track your consistency with your nutrition plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={nutritionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))',
                        borderColor: 'hsl(var(--border))',
                        color: 'hsl(var(--foreground))'
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="adherence" 
                      stroke="hsl(var(--chart-2))" 
                      fill="hsl(var(--chart-2)/0.2)" 
                      name="Adherence (%)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}