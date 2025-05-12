import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { motion } from "@/lib/motion";
import { ChevronRight } from "lucide-react";

export default function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              How It Works
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Your Fitness Journey with FitSync
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              From setup to achieving your goals, FitSync makes fitness simple with AI-powered planning and tracking.
            </p>
          </div>
        </div>
        
        <div className="mx-auto mt-12 max-w-5xl">
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="profile">1. Create Profile</TabsTrigger>
              <TabsTrigger value="plan">2. Get Your Plan</TabsTrigger>
              <TabsTrigger value="track">3. Track & Adapt</TabsTrigger>
            </TabsList>
            <TabsContent value="profile" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Set up your fitness profile</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Enter your fitness goals, current level, and preferences</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Specify dietary needs and any restrictions</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Tell us about available equipment and workout environment</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Note any injuries or physical limitations</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/4498580/pexels-photo-4498580.jpeg"
                    alt="Setting up fitness profile"
                    width={500}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="plan" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Receive AI-generated plans</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Get personalized meal plans based on your macros and preferences</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Receive customized workout routines for your goals</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>View complete grocery lists for meal preparation</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Access detailed instructions for each workout</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/3609169/pexels-photo-3609169.jpeg"
                    alt="AI workout planning"
                    width={500}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="track" className="mt-6">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold">Track progress and adapt</h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Log your workouts and track muscle fatigue</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Record energy levels and mood to optimize future plans</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>Receive AI-adjusted recommendations based on your feedback</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <ChevronRight className="mt-1 h-4 w-4 text-primary flex-shrink-0" />
                      <p>View progress reports and celebrate achievements</p>
                    </div>
                  </div>
                </div>
                <div className="relative flex items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src="https://images.pexels.com/photos/5383763/pexels-photo-5383763.jpeg"
                    alt="Tracking fitness progress"
                    width={500}
                    height={300}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}