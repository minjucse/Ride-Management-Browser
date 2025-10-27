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

// ✅ Zod schema with role validation
const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name is too short" })
      .max(50, { message: "Name is too long" }),
    email: z.string().email({ message: "Invalid email address" }),
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

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: undefined,
    },
  });

  const onSubmit = async (data: z.infer<typeof registerSchema>) => {
    const userInfo = {
      name: data.name,
      email: data.email,
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
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {/* Header */}
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Register your account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details to create an account
        </p>
      </div>

      {/* Form */}
      <div className="grid gap-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                    <Input
                      placeholder="john.doe@company.com"
                      type="email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Password */}
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Password {...field} />
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
                    <Password {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ✅ Role Selection - Full Width */}
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Role</FormLabel>
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

            {/* Submit Button */}
            <Button type="submit" className="w-full">
              Register
            </Button>
          </form>
        </Form>
      </div>

      {/* Footer */}
      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="underline underline-offset-4">
          Login
        </Link>
      </div>
    </div>
  );
}
