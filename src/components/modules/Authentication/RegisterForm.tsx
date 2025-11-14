import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Password from "@/components/ui/Password";
import { useRegisterMutation } from "@/redux/features/auth/auth.api";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, User } from "lucide-react";
import { useState } from "react";

// ✅ Zod schema with role validation
const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name is too short" })
      .max(50, { message: "Name is too long" }),
    email: z.string().email({ message: "Invalid email address" }),
     phone: z
    .string()
    .regex(/^(?:\+8801\d{9}|01\d{9})$/, {
      message:
        "Phone number must be valid for Bangladesh. Format: +8801XXXXXXXXX or 01XXXXXXXXX",
    })
    .optional(),
     password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long." })
      .regex(/[A-Z]/, {
        message: "Password must contain at least 1 uppercase letter.",
      })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must contain at least 1 special character.",
      }),
    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password is too short" }),
    role: z
      .enum(["Rider", "Driver"])
      .refine((val) => !!val, { message: "Please select a role" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export function RegisterForm({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      role: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    setLoading(true);
    const userInfo = {
      name: data.name,
      email: data.email,
        phone: data.phone,
      password: data.password,
      role: data.role,
    };

    try {
      await register(userInfo).unwrap();
      toast.success("User created successfully");
      navigate("/login");
    } catch (error) {
      console.error(error);
      toast.error("Registration failed");
    }
    finally {
      setLoading(false); 
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Header - Updated to match the image text and design */}
      <div className="flex flex-col items-center gap-2 text-center pt-8"> 
        <h1 className="text-3xl font-bold text-blue-800">Create Your Account</h1>
        <p className="text-md text-gray-600">
          Join RideShare Pro and start your journey today
        </p>
      </div>

      {/* Form Container */}
      <div className="">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            
            {/* Grid for Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Full Name */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input 
                          placeholder="Enter your full name" 
                          {...field} 
                          className="pl-10" // Space for icon
                        />
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter your email"
                          type="email"
                          {...field}
                          className="pl-10" // Space for icon
                        />
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Grid for Phone & Role */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Phone (Optional) - New Field */}
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone (Optional)</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          placeholder="Enter your phone number"
                          type="tel"
                          {...field}
                          className="pl-10" // Space for icon
                        />
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              {/* Role Selection */}
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="w-full">
                        <SelectItem value="Rider">Rider</SelectItem>
                        <SelectItem value="Driver">Driver</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            {/* Grid for Password & Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      {/* Assuming your Password component handles the lock icon and visibility toggle internally */}
                      <Password placeholder="••••••••" {...field} /> 
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Confirm Password */}
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      {/* Assuming your Password component handles the lock icon and visibility toggle internally */}
                      <Password placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full py-6 text-lg font-semibold" disabled={loading}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Button>
          </form>
        </Form>
      </div>

      {/* Footer */}
      <div className="text-center text-sm mt-4">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 font-medium hover:underline">
          Sign in here
        </Link>
      </div>
    </div>
  );
}
