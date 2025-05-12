import { Activity, Dumbbell, Flame, Target, Utensils } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardMetrics() {
  const metrics = [
    {
      title: "Daily Calories",
      value: "2,150",
      description: "Target: 2,300",
      change: "-150",
      icon: <Flame className="h-4 w-4 text-rose-500" />,
    },
    {
      title: "Workouts",
      value: "4",
      description: "This week",
      change: "+1",
      icon: <Dumbbell className="h-4 w-4 text-emerald-500" />,
    },
    {
      title: "Current Streak",
      value: "12",
      description: "Days",
      change: "+2",
      icon: <Activity className="h-4 w-4 text-blue-500" />,
    },
  ];

  return (
    <>
      {metrics.map((metric, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            {metric.icon}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground">
              {metric.description} <span className={metric.change.startsWith("+") ? "text-emerald-500" : "text-rose-500"}>{metric.change}</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </>
  );
}