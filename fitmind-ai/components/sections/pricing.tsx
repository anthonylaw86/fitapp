"use client"

import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { motion } from "@/lib/motion";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Free",
      description: "Basic features for individuals just getting started",
      price: { monthly: 0, annual: 0 },
      features: [
        { included: true, text: "Basic AI-generated workout plans" },
        { included: true, text: "Simple meal suggestions" },
        { included: true, text: "Limited workout tracking" },
        { included: false, text: "Advanced nutrition planning" },
        { included: false, text: "Workout customization" },
        { included: false, text: "Premium AI features" },
      ],
      popular: false,
      callToAction: "Sign Up Free"
    },
    {
      name: "Premium",
      description: "Advanced features for fitness enthusiasts",
      price: { monthly: 12.99, annual: 9.99 },
      features: [
        { included: true, text: "Advanced AI workout generation" },
        { included: true, text: "Complete meal planning" },
        { included: true, text: "Comprehensive progress tracking" },
        { included: true, text: "Workout customization" },
        { included: true, text: "Weekly grocery lists" },
        { included: true, text: "Priority support" },
      ],
      popular: true,
      callToAction: "Get Started"
    },
    {
      name: "Ultimate",
      description: "Complete features for serious fitness goals",
      price: { monthly: 24.99, annual: 19.99 },
      features: [
        { included: true, text: "Everything in Premium" },
        { included: true, text: "1-on-1 virtual coaching" },
        { included: true, text: "Advanced analytics" },
        { included: true, text: "Customized supplement recommendations" },
        { included: true, text: "Exclusive content" },
        { included: true, text: "Early access to new features" },
      ],
      popular: false,
      callToAction: "Get Ultimate"
    }
  ];
  
  return (
    <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Pricing
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Choose Your Plan
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Select the plan that fits your fitness goals and budget. All plans come with a 14-day money-back guarantee.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="billing-toggle">Monthly</Label>
            <Switch 
              id="billing-toggle" 
              checked={isAnnual} 
              onCheckedChange={setIsAnnual} 
            />
            <Label htmlFor="billing-toggle">
              Annual
              <Badge variant="outline" className="ml-2 bg-primary text-primary-foreground">
                Save 20%
              </Badge>
            </Label>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col ${plan.popular ? 'border-primary shadow-lg relative' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="mb-4">
                    <span className="text-4xl font-bold">${isAnnual ? plan.price.annual : plan.price.monthly}</span>
                    <span className="text-muted-foreground">/{isAnnual ? 'month, billed annually' : 'month'}</span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                        )}
                        <span className={feature.included ? "" : "text-muted-foreground"}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/signup" className="w-full">
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : ''}`}
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.callToAction}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}