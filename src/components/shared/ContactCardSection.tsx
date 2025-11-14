// src/components/ContactCardSection.tsx

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Headset } from "lucide-react"; // Icons from lucide-react
import { cn } from "@/lib/utils"; // Assuming you have this utility for conditional class merging

// --- TYPE DEFINITIONS ---

// Defines the structure for a single contact card
interface ContactCardData {
  icon: React.ElementType; 
  title: string;
  lines: { text: string; isLink?: boolean }[];
}

// Defines the props for the main section component
interface ContactCardSectionProps extends React.HTMLAttributes<HTMLElement> {}


// --- DATA ARRAY ---

const contactCards: ContactCardData[] = [
  {
    icon: MapPin,
    title: "Visit Our Office",
    lines: [
      { text: "123 Innovation Street" },
      { text: "Tech District, CA 94105" },
      { text: "United States" },
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: [
      { text: "+1 (555) 123-4567", isLink: true }, // Phone number
      { text: "Mon-Fri: 8AM-6PM PST" },
      { text: "Sat-Sun: 9AM-6PM PST" },
    ],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [
      { text: "support@ridesharepro.com", isLink: true }, // Support email
      { text: "business@ridesharepro.com", isLink: true }, // Business email
      { text: "We reply within 24 hours" },
    ],
  },
  {
    icon: Headset,
    title: "24/7 Emergency",
    lines: [
      { text: "+1 (555) 911-HELP", isLink: true }, // Emergency number
      { text: "Emergency support hotline" },
      { text: "Available round the clock" },
    ],
  },
];


// --- COMPONENT ---

export function ContactCardSection({ className, ...props }: ContactCardSectionProps) {
  return (
    // Set a very subtle background for the section to match the image environment
    <section className={cn("py-20 bg-gray-50 dark:bg-gray-900", className)} {...props}> 
      <div className="container mx-auto px-4">
        
        {/* You could add a title/subtitle here if needed, but it's not in the image */}
        
        {/* Grid for Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, index) => {
            const IconComponent = card.icon; 
            
            return (
              <Card 
                key={index} 
                className="flex flex-col items-center p-6 text-center rounded-xl shadow-lg border-gray-100 dark:border-gray-700 bg-white dark:bg-gray-800"
              >
                {/* Icon Header */}
                <CardHeader className="p-0 mb-4 flex items-center justify-center">
                  {/* Icon Container: solid blue circle */}
                  <div className="bg-blue-600 p-3 rounded-full flex items-center justify-center shadow-md">
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                </CardHeader>
                
                {/* Title */}
                <CardTitle className="text-xl font-bold text-blue-800 dark:text-blue-400 mb-4">
                  {card.title}
                </CardTitle>
                
                {/* Content/Details */}
                <CardContent className="p-0 space-y-2 text-gray-600 dark:text-gray-300">
                  {card.lines.map((line, lineIndex) => (
                    <p 
                      key={lineIndex} 
                      className={cn(
                        "text-sm", 
                        // Style links/important lines distinctly if needed
                        line.isLink && "text-blue-600 dark:text-blue-400 font-medium" 
                      )}
                    >
                      {line.text}
                    </p>
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}