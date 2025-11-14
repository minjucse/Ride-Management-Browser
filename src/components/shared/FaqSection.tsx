// src/components/FaqSection.tsx

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Users, BookText } from "lucide-react"; 

// --- TYPE DEFINITIONS ---
interface FaqItem {
  question: string;
  answer: string;
}

interface FaqCategory {
  id: string;
  icon: React.ElementType; 
  title: string;
  items: FaqItem[];
}

interface FaqSectionProps extends React.HTMLAttributes<HTMLElement> {}

// --- DATA ARRAY ---
const faqData: FaqCategory[] = [
  {
    id: "getting-started",
    icon: Users,
    title: "Getting Started",
    items: [
      {
        question: "How do I create an account?",
        answer:
          "Creating an account is easy! Simply download our app or visit our website, click 'Sign Up', and fill in your basic information. You'll need to verify your email address and phone number to complete the registration process.",
      },
      {
        question: "What information do I need to provide?",
        answer:
          "We typically require your full name, email address, phone number, and a secure password. For drivers, additional documents like a driver's license and vehicle registration may be required.",
      },
      {
        question: "Is RideShare Pro available in my city?",
        answer:
          "RideShare Pro is rapidly expanding! You can check our app or website for a list of currently supported cities. We are constantly adding new locations.",
      },
    ],
  },
  {
    id: "booking-rides",
    icon: BookText,
    title: "Booking & Rides",
    items: [
      {
        question: "How do I book a ride?",
        answer:
          "To book a ride, open the app, enter your destination, select your preferred ride type, and confirm. A driver will be dispatched shortly.",
      },
      {
        question: "Can I schedule a ride in advance?",
        answer:
          "Yes, RideShare Pro allows you to schedule rides in advance. Simply select the 'Schedule Ride' option and choose your desired date and time.",
      },
      {
        question: "What are the payment options?",
        answer:
          "We accept various payment methods including credit/debit cards, mobile wallets, and sometimes cash depending on your region. You can manage your payment methods in the app.",
      },
      {
        question: "How do I cancel a ride?",
        answer:
          "You can cancel a ride through the app before your driver arrives. Please be aware that cancellation fees may apply if canceled too close to the pick-up time.",
      },
    ],
  },
];

// --- COMPONENT ---

export function FaqSection(props: FaqSectionProps) {
  return (
    // 1. Set the light-blue background for the entire section
    <section className="py-20 bg-blue-50 dark:bg-gray-900" {...props}> 
      <div className="container mx-auto px-4 max-w-3xl"> 
        
        {/* Main Heading and Subheading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-blue-400 mb-2">
            Frequently Asked Questions
          </h2>
          <p className="text-md text-gray-600 dark:text-gray-300">
            Browse our comprehensive FAQ organized by category
          </p>
        </div>

        {faqData.map((category) => (
          <div key={category.id} className="mt-8"> {/* Adjusted margin-top for spacing between categories */}
            
            {/* Category Header (Icon, Title) */}
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-600 p-3 rounded-xl flex items-center justify-center shadow-lg"> 
                {/* 2. Used blue-600 background for the icon container to match the design */}
                <category.icon className="h-6 w-6 text-white" /> 
              </div>
              <h3 className="text-2xl font-semibold text-blue-800 dark:text-gray-100">
                {category.title}
              </h3>
            </div>

            {/* Accordion for FAQ items */}
            <Accordion type="single" collapsible className="w-full space-y-3"> {/* Added space-y-3 for separation */}
              {category.items.map((item, itemIndex) => (
                <AccordionItem
                  key={itemIndex}
                  value={`item-${category.id}-${itemIndex}`}
                  // 3. Styling for the card-like white background and light blue border/shadow
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md border-0" 
                >
                  <AccordionTrigger 
                    className="font-semibold text-base px-6 py-4 hover:no-underline text-gray-800 dark:text-gray-100 data-[state=open]:text-blue-600"
                  >
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent 
                    // 4. Added a subtle light blue border line for separation when open
                    className="px-6 pb-5 text-gray-600 dark:text-gray-300 border-t border-blue-100"
                  >
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </section>
  );
}