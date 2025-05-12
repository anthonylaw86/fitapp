"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQ() {
  const faqs = [
    {
      question: "How does the AI create personalized fitness plans?",
      answer: "Our AI analyzes your fitness goals, preferences, available equipment, and physical condition to create customized workout and meal plans. It continuously adapts based on your feedback, energy levels, and progress."
    },
    {
      question: "Can I use FitSync without a gym membership?",
      answer: "Absolutely! FitSync can create workout plans for any environment, including home workouts with minimal or no equipment. Simply specify your available resources, and the AI will tailor plans to match."
    },
    {
      question: "How do I track my muscle fatigue?",
      answer: "After each workout, you can rate your fatigue level for different muscle groups. This data helps the AI adjust future workouts to prevent overtraining and optimize recovery."
    },
    {
      question: "Can I customize the meal plans for dietary restrictions?",
      answer: "Yes, FitSync supports various dietary preferences and restrictions including vegetarian, vegan, gluten-free, keto, paleo, and allergies. The AI will generate meal plans that align with your specific needs."
    },
    {
      question: "What's the difference between free and premium plans?",
      answer: "The free plan offers basic workout suggestions and simple meal ideas. Premium plans provide advanced AI features, comprehensive meal planning with grocery lists, detailed progress tracking, workout customization, and priority support."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. We offer a 14-day money-back guarantee for all new premium subscriptions."
    }
  ];
  
  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get answers to common questions about FitSync and how it can help you achieve your fitness goals.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl space-y-4 py-12">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}