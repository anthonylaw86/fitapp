"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, ChevronDown, ChevronUp, Sparkles, Check, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function MealPlansPage() {
  const [expandedMeal, setExpandedMeal] = useState<string | null>(null);
  
  const toggleMeal = (mealId: string) => {
    if (expandedMeal === mealId) {
      setExpandedMeal(null);
    } else {
      setExpandedMeal(mealId);
    }
  };
  
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  
  const mealPlan = {
    monday: [
      {
        id: "mon-breakfast",
        time: "Breakfast",
        name: "Greek Yogurt Bowl",
        description: "Greek yogurt with berries, honey, and granola",
        image: "https://images.pexels.com/photos/1092730/pexels-photo-1092730.jpeg",
        macros: { protein: "28g", carbs: "35g", fat: "12g", calories: "360" },
        ingredients: [
          "1 cup Greek yogurt (0% fat)",
          "1/2 cup mixed berries",
          "1 tbsp honey",
          "1/4 cup low-sugar granola",
          "1 tbsp chia seeds"
        ],
        tags: ["High Protein", "Quick"]
      },
      {
        id: "mon-lunch",
        time: "Lunch",
        name: "Grilled Chicken Salad",
        description: "Grilled chicken breast with mixed greens, avocado, cherry tomatoes, and balsamic vinaigrette",
        image: "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg",
        macros: { protein: "35g", carbs: "15g", fat: "22g", calories: "398" },
        ingredients: [
          "6 oz grilled chicken breast",
          "2 cups mixed greens",
          "1/2 avocado, sliced",
          "1/2 cup cherry tomatoes, halved",
          "1/4 cucumber, sliced",
          "2 tbsp balsamic vinaigrette"
        ],
        tags: ["Protein", "Low Carb"]
      },
      {
        id: "mon-dinner",
        time: "Dinner",
        name: "Baked Salmon with Quinoa",
        description: "Baked salmon fillet with lemon and herbs, served with quinoa and roasted vegetables",
        image: "https://images.pexels.com/photos/3655916/pexels-photo-3655916.jpeg",
        macros: { protein: "32g", carbs: "45g", fat: "18g", calories: "465" },
        ingredients: [
          "5 oz salmon fillet",
          "1/2 cup cooked quinoa",
          "1 cup mixed roasted vegetables (broccoli, bell peppers, zucchini)",
          "1 tbsp olive oil",
          "1 lemon, sliced",
          "Fresh herbs (dill, parsley)"
        ],
        tags: ["Protein", "Omega-3"]
      },
      {
        id: "mon-snack",
        time: "Snack",
        name: "Protein Smoothie",
        description: "Banana and peanut butter protein smoothie",
        image: "https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg",
        macros: { protein: "25g", carbs: "30g", fat: "8g", calories: "292" },
        ingredients: [
          "1 scoop protein powder",
          "1 banana",
          "1 tbsp peanut butter",
          "1 cup almond milk",
          "Ice cubes"
        ],
        tags: ["High Protein", "Post-Workout"]
      }
    ]
  };
  
  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Meal Plans</h1>
        <p className="text-muted-foreground">
          Your AI-generated, macro-optimized meal plans based on your nutritional needs and preferences.
        </p>
      </div>
      
      <div className="mb-6 flex items-center gap-4">
        <Button className="gap-2">
          <ShoppingBag className="h-4 w-4" />
          Generate Shopping List
        </Button>
        <Button variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Regenerate Meal Plan
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
        
        <TabsContent value="monday" className="space-y-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Card className="col-span-2">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <CardTitle>Monday's Nutritional Summary</CardTitle>
                </div>
                <CardDescription>
                  AI-optimized based on your protein needs and workout schedule
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium text-muted-foreground">Total Calories</div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <div className="text-2xl font-bold">1,515</div>
                      <div className="text-xs text-muted-foreground">cal</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium text-muted-foreground">Protein</div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <div className="text-2xl font-bold">120</div>
                      <div className="text-xs text-muted-foreground">g (32%)</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium text-muted-foreground">Carbs</div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <div className="text-2xl font-bold">125</div>
                      <div className="text-xs text-muted-foreground">g (33%)</div>
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-medium text-muted-foreground">Fat</div>
                    <div className="mt-1 flex items-baseline gap-1">
                      <div className="text-2xl font-bold">60</div>
                      <div className="text-xs text-muted-foreground">g (35%)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4">
            {mealPlan.monday.map((meal) => (
              <Card key={meal.id} className="overflow-hidden">
                <div
                  className="flex cursor-pointer items-center gap-4 p-4"
                  onClick={() => toggleMeal(meal.id)}
                >
                  <div className="h-16 w-16 overflow-hidden rounded-md">
                    <Image
                      src={meal.image}
                      alt={meal.name}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-muted-foreground">{meal.time}</div>
                    <div className="font-medium">{meal.name}</div>
                    <div className="mt-1 flex gap-1">
                      {meal.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium">{meal.macros.calories} cal</div>
                    <div className="text-xs text-muted-foreground">
                      P: {meal.macros.protein} • C: {meal.macros.carbs} • F: {meal.macros.fat}
                    </div>
                  </div>
                  {expandedMeal === meal.id ? (
                    <ChevronUp className="h-5 w-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-muted-foreground" />
                  )}
                </div>
                
                {expandedMeal === meal.id && (
                  <>
                    <Separator />
                    <CardContent className="p-4 pt-4">
                      <div className="grid gap-6 md:grid-cols-2">
                        <div>
                          <h4 className="mb-2 font-medium">Description</h4>
                          <p className="text-sm text-muted-foreground">{meal.description}</p>
                          
                          <h4 className="mb-2 mt-4 font-medium">Ingredients</h4>
                          <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                            {meal.ingredients.map((ingredient, i) => (
                              <li key={i}>{ingredient}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="overflow-hidden rounded-lg">
                          <Image
                            src={meal.image}
                            alt={meal.name}
                            width={500}
                            height={300}
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-end gap-2 p-4 pt-0">
                      <Button variant="outline" size="sm">
                        Replace Meal
                      </Button>
                      <Button size="sm">View Recipe</Button>
                    </CardFooter>
                  </>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>
        
        {weekdays.slice(1).map((day) => (
          <TabsContent key={day} value={day.toLowerCase()} className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>{day}'s Meal Plan</CardTitle>
                <CardDescription>Your meals will appear here.</CardDescription>
              </CardHeader>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}