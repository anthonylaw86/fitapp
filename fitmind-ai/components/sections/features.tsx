import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dumbbell, UtensilsCrossed, LineChart, Users, BrainCircuit, Sparkles, ArrowUpRight } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <UtensilsCrossed className="h-10 w-10 text-primary" />,
      title: "AI Meal Planning",
      description: "Get personalized meal plans based on your macros, preferences, and dietary restrictions."
    },
    {
      icon: <Dumbbell className="h-10 w-10 text-primary" />,
      title: "Custom Workouts",
      description: "AI-generated workout plans optimized for your goals and available equipment."
    },
    {
      icon: <LineChart className="h-10 w-10 text-primary" />,
      title: "Progress Tracking",
      description: "Monitor muscle fatigue, energy levels, and fitness progress over time."
    },
    {
      icon: <BrainCircuit className="h-10 w-10 text-primary" />,
      title: "Adaptive AI",
      description: "Our AI adjusts your plans based on your feedback, progress, and changing needs."
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Workout Customization",
      description: "Modify your workouts based on injuries, equipment, or preferences."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Community Support",
      description: "Connect with others, share achievements, and stay motivated."
    }
  ];
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              AI-Powered Fitness Tools
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              FitSync combines cutting-edge AI with fitness expertise to deliver a personalized experience
              that adapts to your unique needs and goals.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5 text-primary" />
                </div>
                {feature.icon}
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}