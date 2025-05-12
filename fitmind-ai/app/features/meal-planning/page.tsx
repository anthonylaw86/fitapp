"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { UtensilsCrossed, ShoppingBag, Brain, Sparkles } from "lucide-react";
import Image from "next/image";

export default function MealPlanningFeature() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            AI-Powered Meal Planning
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Get personalized meal plans tailored to your goals, preferences, and dietary needs.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">How It Works</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <Brain className="h-6 w-6 text-primary" />
                <CardTitle>AI Analysis</CardTitle>
                <CardDescription>
                  Our AI analyzes your goals, preferences, and dietary restrictions
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <UtensilsCrossed className="h-6 w-6 text-primary" />
                <CardTitle>Personalized Meal Plans</CardTitle>
                <CardDescription>
                  Get daily meal suggestions that match your macros and preferences
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <ShoppingBag className="h-6 w-6 text-primary" />
                <CardTitle>Automated Shopping Lists</CardTitle>
                <CardDescription>
                  Generate shopping lists based on your meal plan
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Sparkles className="h-6 w-6 text-primary" />
                <CardTitle>Dynamic Adjustments</CardTitle>
                <CardDescription>
                  Plans adapt based on your progress and feedback
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg"
            alt="Healthy meal planning"
            width={800}
            height={1000}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm">
            <div className="text-lg font-semibold">Start Your Meal Plan Today</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Join thousands of users who have transformed their nutrition with AI-powered meal planning
            </p>
            <Button className="mt-4">Get Started</Button>
          </div>
        </div>
      </div>
    </div>
  );
}