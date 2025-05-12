"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function OnboardingPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;
  
  // Step 1: Basic Information
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [heightFeet, setHeightFeet] = useState("");
  const [heightInches, setHeightInches] = useState("");
  const [weight, setWeight] = useState("");
  
  // Step 2: Fitness Goals
  const [fitnessGoal, setFitnessGoal] = useState("");
  const [activityLevel, setActivityLevel] = useState(3);
  
  // Step 3: Diet Preferences
  const [dietType, setDietType] = useState("");
  const [allergies, setAllergies] = useState<string[]>([]);
  
  // Step 4: Equipment Access
  const [workoutLocation, setWorkoutLocation] = useState("");
  const [availableEquipment, setAvailableEquipment] = useState<string[]>([]);
  
  // Step 5: Schedule Preferences
  const [workoutDuration, setWorkoutDuration] = useState(30);
  const [workoutFrequency, setWorkoutFrequency] = useState(3);
  const [preferredTime, setPreferredTime] = useState("");
  
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Form is complete, navigate to dashboard
      router.push("/dashboard");
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  const handleCheckboxChange = (value: string, currentValues: string[], setValues: React.Dispatch<React.SetStateAction<string[]>>) => {
    if (currentValues.includes(value)) {
      setValues(currentValues.filter(v => v !== value));
    } else {
      setValues([...currentValues, value]);
    }
  };
  
  return (
    <div className="container max-w-4xl py-12">
      <Card className="border-none shadow-none">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Let's personalize your experience</CardTitle>
          <CardDescription>
            Help us create the perfect fitness plan for you
          </CardDescription>
          <div className="mt-4 flex w-full items-center justify-between">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-muted">
                  <div
                    className="absolute left-0 top-0 h-1 bg-primary transition-all duration-200"
                    style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                  />
                </div>
                <div className="relative flex justify-between">
                  {Array.from({ length: totalSteps }).map((_, index) => (
                    <div
                      key={index}
                      className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-semibold ${
                        index + 1 <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="mt-6">
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Basic Information</h3>
                <p className="text-muted-foreground">
                  Let's start with some basic information about you
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Gender</Label>
                  <RadioGroup value={gender} onValueChange={setGender} className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="non-binary" id="non-binary" />
                      <Label htmlFor="non-binary">Non-binary</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="prefer-not" id="prefer-not" />
                      <Label htmlFor="prefer-not">Prefer not to say</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="age">Age</Label>
                  <Input 
                    id="age" 
                    type="number" 
                    placeholder="Enter your age" 
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label>Height</Label>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Input 
                        type="number" 
                        placeholder="Feet"
                        value={heightFeet}
                        onChange={(e) => setHeightFeet(e.target.value)}
                      />
                    </div>
                    <div>
                      <Input 
                        type="number" 
                        placeholder="Inches"
                        min="0"
                        max="11"
                        value={heightInches}
                        onChange={(e) => setHeightInches(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="weight">Weight (lbs)</Label>
                  <Input 
                    id="weight" 
                    type="number" 
                    placeholder="Weight in pounds" 
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                  />
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Fitness Goals</h3>
                <p className="text-muted-foreground">
                  Tell us about your fitness objectives
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Primary Fitness Goal</Label>
                  <RadioGroup value={fitnessGoal} onValueChange={setFitnessGoal} className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="lose-weight" id="lose-weight" className="mr-3" />
                      <div>
                        <Label htmlFor="lose-weight" className="font-medium">Lose Weight</Label>
                        <p className="text-sm text-muted-foreground">Burn fat and reduce overall body weight</p>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="gain-muscle" id="gain-muscle" className="mr-3" />
                      <div>
                        <Label htmlFor="gain-muscle" className="font-medium">Gain Muscle</Label>
                        <p className="text-sm text-muted-foreground">Build strength and increase muscle mass</p>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="improve-fitness" id="improve-fitness" className="mr-3" />
                      <div>
                        <Label htmlFor="improve-fitness" className="font-medium">Improve Fitness</Label>
                        <p className="text-sm text-muted-foreground">Enhance overall health and endurance</p>
                      </div>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="maintain" id="maintain" className="mr-3" />
                      <div>
                        <Label htmlFor="maintain" className="font-medium">Maintain Current Shape</Label>
                        <p className="text-sm text-muted-foreground">Keep your current fitness level</p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Current Activity Level</Label>
                    <span className="text-sm text-muted-foreground">
                      {activityLevel === 1 && "Sedentary"}
                      {activityLevel === 2 && "Lightly Active"}
                      {activityLevel === 3 && "Moderately Active"}
                      {activityLevel === 4 && "Very Active"}
                      {activityLevel === 5 && "Extremely Active"}
                    </span>
                  </div>
                  <Slider
                    min={1}
                    max={5}
                    step={1}
                    value={[activityLevel]}
                    onValueChange={(value) => setActivityLevel(value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Sedentary</span>
                    <span>Extremely Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Diet Preferences</h3>
                <p className="text-muted-foreground">
                  Help us understand your nutritional needs
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Diet Type</Label>
                  <RadioGroup value={dietType} onValueChange={setDietType} className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="standard" id="standard" className="mr-3" />
                      <Label htmlFor="standard">Standard (No Restrictions)</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="vegetarian" id="vegetarian" className="mr-3" />
                      <Label htmlFor="vegetarian">Vegetarian</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="vegan" id="vegan" className="mr-3" />
                      <Label htmlFor="vegan">Vegan</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="keto" id="keto" className="mr-3" />
                      <Label htmlFor="keto">Keto</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="paleo" id="paleo" className="mr-3" />
                      <Label htmlFor="paleo">Paleo</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="mediterranean" id="mediterranean" className="mr-3" />
                      <Label htmlFor="mediterranean">Mediterranean</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label>Food Allergies or Restrictions</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Gluten', 'Dairy', 'Nuts', 'Shellfish', 'Eggs', 'Soy'].map((allergen) => (
                      <div key={allergen} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`allergen-${allergen}`} 
                          checked={allergies.includes(allergen.toLowerCase())}
                          onCheckedChange={() => handleCheckboxChange(allergen.toLowerCase(), allergies, setAllergies)}
                        />
                        <Label htmlFor={`allergen-${allergen}`}>{allergen}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Equipment Access</h3>
                <p className="text-muted-foreground">
                  Tell us where you'll be working out and what equipment you have access to
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Where will you primarily work out?</Label>
                  <RadioGroup value={workoutLocation} onValueChange={setWorkoutLocation} className="grid grid-cols-1 gap-2 md:grid-cols-2">
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="home" id="home" className="mr-3" />
                      <Label htmlFor="home">At Home</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="gym" id="gym" className="mr-3" />
                      <Label htmlFor="gym">Gym</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="outdoors" id="outdoors" className="mr-3" />
                      <Label htmlFor="outdoors">Outdoors</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="mixed" id="mixed" className="mr-3" />
                      <Label htmlFor="mixed">Mixed Locations</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label>Available Equipment</Label>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      'Dumbbells', 'Barbell', 'Resistance Bands', 'Pull-up Bar', 
                      'Kettlebells', 'Bench', 'Treadmill', 'Exercise Bike'
                    ].map((equipment) => (
                      <div key={equipment} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`equipment-${equipment}`} 
                          checked={availableEquipment.includes(equipment.toLowerCase())}
                          onCheckedChange={() => handleCheckboxChange(equipment.toLowerCase(), availableEquipment, setAvailableEquipment)}
                        />
                        <Label htmlFor={`equipment-${equipment}`}>{equipment}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-xl font-medium">Schedule Preferences</h3>
                <p className="text-muted-foreground">
                  Help us create a workout schedule that fits your lifestyle
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Workout Duration (minutes)</Label>
                    <span className="text-sm">{workoutDuration} minutes</span>
                  </div>
                  <Slider
                    min={15}
                    max={90}
                    step={5}
                    value={[workoutDuration]}
                    onValueChange={(value) => setWorkoutDuration(value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>15 min</span>
                    <span>90 min</span>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Workouts Per Week</Label>
                    <span className="text-sm">{workoutFrequency} days</span>
                  </div>
                  <Slider
                    min={1}
                    max={7}
                    step={1}
                    value={[workoutFrequency]}
                    onValueChange={(value) => setWorkoutFrequency(value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1 day</span>
                    <span>7 days</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label>Preferred Time of Day</Label>
                  <RadioGroup value={preferredTime} onValueChange={setPreferredTime} className="grid grid-cols-2 gap-2">
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="morning" id="morning" className="mr-3" />
                      <Label htmlFor="morning">Morning</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="afternoon" id="afternoon" className="mr-3" />
                      <Label htmlFor="afternoon">Afternoon</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="evening" id="evening" className="mr-3" />
                      <Label htmlFor="evening">Evening</Label>
                    </div>
                    <div className="flex cursor-pointer items-center rounded-md border p-4 hover:bg-muted">
                      <RadioGroupItem value="flexible" id="flexible" className="mr-3" />
                      <Label htmlFor="flexible">Flexible</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={prevStep} 
            disabled={currentStep === 1}
          >
            <ChevronLeft className="mr-2 h-4 w-4" />
            Back
          </Button>
          <Button 
            onClick={nextStep}
          >
            {currentStep === totalSteps ? "Finish" : "Next"}
            {currentStep !== totalSteps && <ChevronRight className="ml-2 h-4 w-4" />}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}