"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis 
} from "recharts";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function WeeklyProgress() {
  const workoutData = [
    { day: "Mon", workouts: 1, duration: 30, calories: 320 },
    { day: "Tue", workouts: 1, duration: 45, calories: 450 },
    { day: "Wed", workouts: 0, duration: 0, calories: 0 },
    { day: "Thu", workouts: 1, duration: 35, calories: 380 },
    { day: "Fri", workouts: 1, duration: 50, calories: 520 },
    { day: "Sat", workouts: 0, duration: 0, calories: 0 },
    { day: "Sun", workouts: 1, duration: 60, calories: 580 },
  ];
  
  const nutritionData = [
    { day: "Mon", calories: 2150, protein: 145, carbs: 220, fat: 65 },
    { day: "Tue", calories: 2210, protein: 150, carbs: 235, fat: 60 },
    { day: "Wed", calories: 2300, protein: 155, carbs: 240, fat: 70 },
    { day: "Thu", calories: 2180, protein: 160, carbs: 210, fat: 68 },
    { day: "Fri", calories: 2250, protein: 158, carbs: 225, fat: 66 },
    { day: "Sat", calories: 2400, protein: 140, carbs: 260, fat: 75 },
    { day: "Sun", calories: 2320, protein: 150, carbs: 235, fat: 72 },
  ];
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Progress</CardTitle>
        <CardDescription>
          View your workout and nutrition data for the past week
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="workouts">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="workouts">Workouts</TabsTrigger>
            <TabsTrigger value="nutrition">Nutrition</TabsTrigger>
          </TabsList>
          
          <TabsContent value="workouts" className="space-y-4">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={workoutData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
                  <YAxis yAxisId="left" orientation="left" stroke="hsl(var(--chart-1))" />
                  <YAxis yAxisId="right" orientation="right" stroke="hsl(var(--chart-2))" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))',
                      borderColor: 'hsl(var(--border))',
                      color: 'hsl(var(--foreground))'
                    }} 
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="duration" 
                    stroke="hsl(var(--chart-1))" 
                    strokeWidth={2}
                    name="Duration (min)"
                  />
                  <Line 
                    yAxisId="right"
                    type="monotone" 
                    dataKey="calories" 
                    stroke="hsl(var(--chart-2))" 
                    strokeWidth={2}
                    name="Calories Burned"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
          
          <TabsContent value="nutrition" className="space-y-4">
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={nutritionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="day" />
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
                    dataKey="calories" 
                    stroke="hsl(var(--chart-1))" 
                    strokeWidth={2}
                    name="Calories"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="protein" 
                    stroke="hsl(var(--chart-2))" 
                    strokeWidth={2}
                    name="Protein (g)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="carbs" 
                    stroke="hsl(var(--chart-3))" 
                    strokeWidth={2}
                    name="Carbs (g)"
                  />
                  <Line 
                    type="monotone" 
                    dataKey="fat" 
                    stroke="hsl(var(--chart-4))" 
                    strokeWidth={2}
                    name="Fat (g)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}