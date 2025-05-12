"use client"

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Activity, Bell, Brain, ChevronsUpDown, Plus, User, Zap } from "lucide-react";

export default function DashboardHeader() {
  const [moodValue, setMoodValue] = useState([3]);
  const [energyValue, setEnergyValue] = useState([3]);
  
  const getMoodEmoji = (value: number) => {
    const emojis = ["😞", "😐", "🙂", "😊", "😁"];
    return emojis[value - 1];
  };
  
  const getEnergyDescription = (value: number) => {
    const descriptions = ["Very Low", "Low", "Moderate", "High", "Very High"];
    return descriptions[value - 1];
  };
  
  return (
    <div className="border-b">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-2">
          <h1 className="text-lg font-semibold md:text-xl">Dashboard</h1>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 gap-1">
                <Brain className="h-4 w-4" />
                <span className="hidden md:inline-block">Mood</span>
                <span className="md:ml-1">{getMoodEmoji(moodValue[0])}</span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">How are you feeling today?</h4>
                  <span className="text-2xl">{getMoodEmoji(moodValue[0])}</span>
                </div>
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  value={moodValue}
                  onValueChange={setMoodValue}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Not Great</span>
                  <span>Amazing</span>
                </div>
                <Button className="w-full">Save</Button>
              </div>
            </PopoverContent>
          </Popover>
          
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="sm" className="h-9 gap-1">
                <Zap className="h-4 w-4" />
                <span className="hidden md:inline-block">Energy</span>
                <span className={cn(
                  "md:ml-1",
                  energyValue[0] <= 2 ? "text-amber-500" : energyValue[0] >= 4 ? "text-green-500" : ""
                )}>
                  {getEnergyDescription(energyValue[0])}
                </span>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">How's your energy level today?</h4>
                  <span className={cn(
                    "font-medium",
                    energyValue[0] <= 2 ? "text-amber-500" : energyValue[0] >= 4 ? "text-green-500" : ""
                  )}>
                    {getEnergyDescription(energyValue[0])}
                  </span>
                </div>
                <Slider
                  min={1}
                  max={5}
                  step={1}
                  value={energyValue}
                  onValueChange={setEnergyValue}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Exhausted</span>
                  <span>Energetic</span>
                </div>
                <Button className="w-full">Save</Button>
              </div>
            </PopoverContent>
          </Popover>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="rounded-full">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}