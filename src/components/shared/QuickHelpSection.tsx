// src/components/QuickHelpSection.tsx

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, CircleDollarSign, Bug, Users, LucideIcon } from "lucide-react"; 
import { Link } from 'react-router';

interface HelpCardData {
  icon: LucideIcon;
  title: string;
  description: string;
  linkText: string;
  href: string;
}

interface QuickHelpSectionProps extends React.HTMLAttributes<HTMLElement> {}

const helpCards: HelpCardData[] = [
  {
    icon: Clock, 
    title: "Account Issues",
    description: "Problems with login, password, or profile settings",
    linkText: "Get Help →",
    href: "/help/account",
  },
  {
    icon: CircleDollarSign, 
    title: "Billing Questions",
    description: "Questions about charges, refunds, or payment methods",
    linkText: "Contact Support →",
    href: "/help/billing",
  },
  {
    icon: Bug, // Passed as a component reference
    title: "Technical Issues",
    description: "App crashes, bugs, or technical difficulties",
    linkText: "Report Issue →",
    href: "/help/technical",
  },
  {
    icon: Users, // Passed as a component reference
    title: "Driver/Rider Concerns",
    description: "Issues with service quality or behavior",
    linkText: "File Report →",
    href: "/help/concerns",
  },
];


// --- COMPONENT ---

export function QuickHelpSection(props: QuickHelpSectionProps) {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" {...props}>
      <div className="container mx-auto px-4 text-center">
        {/* Main Heading */}
        <h2 className="text-4xl font-extrabold text-gray-900 dark:text-blue-400 mb-4">
          Need Quick Help?
        </h2>
        {/* Subheading */}
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12">
          Select a category for immediate assistance
        </p>

        {/* Grid for Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {helpCards.map((card, index) => {
            const IconComponent = card.icon; // Rename for JSX rendering

            return (
              <Card 
                key={index} 
                className="flex flex-col items-start p-6 text-left border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 bg-white dark:bg-gray-800"
              >
                <CardHeader className="p-0 mb-4">
                  <div className="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-full flex items-center justify-center">
                    {/* Render the icon component */}
                    <IconComponent className="h-6 w-6 text-blue-600" /> 
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {card.title}
                  </CardTitle>
                  <CardDescription className="text-gray-500 dark:text-gray-400 text-sm">
                    {card.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-0 mt-6">
                  <Button variant="link" asChild className="p-0 h-auto text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                    <Link to={card.href}>
                      {card.linkText}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}