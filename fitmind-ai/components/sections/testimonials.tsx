import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sophia Chen",
      role: "Marathon Runner",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
      content: "FitSync has transformed my training. The AI adapts my meal and workout plans based on my energy levels, helping me recover faster and perform better during races.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Busy Professional",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
      content: "With my hectic schedule, FitSync is exactly what I needed. Quick workouts I can do at home and meal plans that are easy to follow have helped me stay consistent.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Fitness Enthusiast",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
      content: "The way FitSync adjusts my workouts when I'm sore or injured has been incredible. I've made more progress in 3 months than I did in a year of training on my own.",
      rating: 5
    }
  ];
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What Our Users Say
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Real stories from real people who have transformed their fitness journey with FitSync.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="transition-all hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{testimonial.content}</p>
              </CardContent>
              <CardFooter>
                <div className="flex">
                  {Array(testimonial.rating).fill(0).map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}