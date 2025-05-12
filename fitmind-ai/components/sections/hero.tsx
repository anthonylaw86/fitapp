"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "@/lib/motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false);
  
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none"
              >
                Your AI Fitness Coach, <br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Personalized for You
                </span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
              >
                FitSync uses AI to create personalized meal plans and workouts based on your goals, 
                preferences, and daily energy levels. Track progress, customize workouts, and achieve results faster.
              </motion.p>
            </div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <Link href="/signup">
                <Button 
                  size="lg" 
                  className="group relative overflow-hidden rounded-full px-6 py-2 transition-all duration-300"
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <span className="relative z-10">Get Started Free</span>
                  <span className={`absolute inset-0 z-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-100 group-hover:opacity-90 transition-opacity duration-300`}></span>
                  <ArrowRight className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovering ? 'translate-x-1' : ''}`} />
                </Button>
              </Link>
              <Link href="/features">
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center"
          >
            <div className="relative h-[400px] w-full overflow-hidden rounded-xl">
              <Image
                src="https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg"
                alt="Person working out with AI fitness tracking"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0" />
              <div className="absolute bottom-4 left-4 right-4 rounded-lg bg-background/80 p-4 backdrop-blur-sm">
                <div className="text-sm font-medium">Today's recommendation</div>
                <div className="mt-1 text-xs text-muted-foreground">Based on your energy level and goals</div>
                <div className="mt-2 flex items-center gap-2">
                  <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">High Protein</div>
                  <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">Upper Body</div>
                  <div className="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">30 min</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}