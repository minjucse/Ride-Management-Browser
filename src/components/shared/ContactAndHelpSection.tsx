// src/components/ContactAndHelpSection.tsx

import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Link } from "react-router";
import { toast } from "sonner";

import { MessageSquare, Phone, Mail, ArrowRight } from "lucide-react";

const contactFormSchema = z.object({
  firstName: z.string().min(1, "First Name is required"),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email"),
  phoneNumber: z.string().optional(),
  subject: z.string().min(1, "Subject is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const helpCards = [
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Get instant help from our support team",
    linkText: "Start Chat",
    href: "/chat",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with a support representative",
    linkText: "Call Now",
    href: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email Support",
    description: "Send us a detailed message about your inquiry",
    linkText: "Send Email",
    href: "mailto:support@company.com",
  },
];

export function ContactAndHelpSection() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    toast.success("Message sent successfully!");
    form.reset();
  };

  return (
    <section className="py-20 bg-[#e8f0ff]">
      <div className="container mx-auto px-4 max-w-7xl">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ---------------- LEFT FORM (Matches screenshot) ---------------- */}
          <Card className="rounded-2xl shadow-md bg-white border border-blue-100 p-10">
            <CardHeader className="p-0 mb-8">
              <CardTitle className="text-3xl font-bold text-blue-900">
                Send us a Message
              </CardTitle>
              <CardDescription className="text-gray-600 mt-2 text-lg leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>

            <CardContent className="p-0">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                  {/* First + Last*/}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900">First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your first name"
                              className="h-12 rounded-lg border-blue-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900">Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your last name"
                              className="h-12 rounded-lg border-blue-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              {...field}
                              placeholder="Enter your email address"
                              className="h-12 rounded-lg border-blue-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phoneNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-blue-900">Phone Number (Optional)</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="Enter your phone number"
                              className="h-12 rounded-lg border-blue-200"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  {/* Subject */}
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900">Subject</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="What's this about?"
                            className="h-12 rounded-lg border-blue-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Message */}
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-blue-900">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Tell us more about your inquiry..."
                            rows={4}
                            className="rounded-lg border-blue-200"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-blue-700 hover:bg-blue-800 text-white py-6 text-lg rounded-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>

          {/* ---------------- RIGHT HELP SECTION ---------------- */}
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Choose from multiple support channels to get the help you need, when you need it.
            </p>

            <div className="space-y-6">
              {helpCards.map((item, i) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={i}
                    className="p-8 rounded-2xl shadow-md bg-gradient-to-br
                               from-white to-blue-50 border border-blue-100"
                  >
                    <div className="flex gap-5">

                      {/* icon */}
                      <div className="bg-blue-600 p-4 rounded-xl flex items-center justify-center">
                        <Icon className="h-7 w-7 text-white" />
                      </div>

                      {/* text */}
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-blue-900">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {item.description}
                        </p>

                        <Button
                          asChild
                          variant="outline"
                          className="rounded-full border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white"
                        >
                          <Link to={item.href} className="flex items-center gap-2">
                            {item.linkText}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
