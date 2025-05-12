import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, ChevronRight, ShoppingBag, UtensilsCrossed } from "lucide-react";

export default function UpcomingMeals() {
  const meals = [
    {
      time: "Breakfast",
      name: "Greek Yogurt with Berries and Honey",
      macros: { protein: "20g", carbs: "30g", fat: "8g", calories: "272" },
      tags: ["High Protein", "Quick"]
    },
    {
      time: "Lunch",
      name: "Grilled Chicken Salad with Avocado",
      macros: { protein: "35g", carbs: "15g", fat: "22g", calories: "398" },
      tags: ["Protein", "Low Carb"]
    },
    {
      time: "Dinner",
      name: "Salmon with Quinoa and Roasted Vegetables",
      macros: { protein: "32g", carbs: "45g", fat: "18g", calories: "465" },
      tags: ["Protein", "Omega-3"]
    }
  ];
  
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-md font-bold">Today's Meals</CardTitle>
        <UtensilsCrossed className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          {meals.map((meal, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">{meal.time}</span>
                <span className="text-xs text-muted-foreground">{meal.macros.calories} cal</span>
              </div>
              <div className="rounded-md border p-2">
                <div className="flex justify-between">
                  <span className="text-sm">{meal.name}</span>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
                <div className="mt-1 flex gap-1">
                  {meal.tags.map((tag, i) => (
                    <Badge key={i} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="mt-2 flex text-xs text-muted-foreground">
                  <span className="mr-3">P: {meal.macros.protein}</span>
                  <span className="mr-3">C: {meal.macros.carbs}</span>
                  <span>F: {meal.macros.fat}</span>
                </div>
              </div>
              {index < meals.length - 1 && <Separator className="my-2" />}
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="outline" className="w-full gap-1">
          <ShoppingBag className="h-4 w-4" />
          Shopping List
        </Button>
      </CardFooter>
    </Card>
  );
}