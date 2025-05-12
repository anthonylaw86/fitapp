"use client"

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Sparkles, Zap, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function AIFeature() {
  return (
    <div className="container py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
            AI Coaching
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Experience personalized fitness coaching powered by advanced artificial intelligence.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2">
        <div className="relative rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/4498152/pexels-photo-4498152.jpeg"
            alt="AI coaching"
            width={800}
            height={1000}
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm">
            <div className="text-lg font-semibold">Your Personal AI Coach</div>
            <p className="mt-1 text-sm text-muted-foreground">
              Get 24/7 guidance and support from our advanced AI system
            </p>
            <Button className="mt-4">Try AI Coaching</Button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">AI Capabilities</h2>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <Brain className="h-6 w-6 text-primary" />
                <CardTitle>Smart Analysis</CardTitle>
                <CardDescription>
                  AI analyzes your performance and adapts recommendations in real-time
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Sparkles className="h-6 w-6 text-primary" />
                <CardTitle>Personalized Plans</CardTitle>
                <CardDescription>
                  Get custom workout and nutrition plans based on your unique needs
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <Zap className="h-6 w-6 text-primary" />
                <CardTitle>Real-time Adjustments</CardTitle>
                <CardDescription>
                  Plans adapt based on your energy levels and recovery status
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card>
              <CardHeader>
                <RefreshCw className="h-6 w-6 text-primary" />
                <CardTitle>Continuous Learning</CardTitle>
                <CardDescription>
                  AI learns from your feedback to improve recommendations over time
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}