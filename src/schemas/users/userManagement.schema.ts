import { z } from "zod";

// Enums
export enum Role {
  Admin = "Admin",
  Rider = "Rider",
  Customer = "Driver",
}

export enum IsActive {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

// Auth provider sub-schema
export const authProviderSchema = z.object({
  provider: z.string().min(1, { message: "Provider name is required" }),
  providerId: z.string().optional(),
});

// Main register schema
export const registerSchema = z
  .object({
    name: z
      .string()
      .min(3, { message: "Name is too short" })
      .max(50, { message: "Name is too long" })
      .trim(),

    email: z.string().email({ message: "Invalid email address" }),

    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters long" }),

    confirmPassword: z
      .string()
      .min(8, { message: "Confirm Password must be at least 8 characters long" }),

    phone: z
      .string()
      .regex(/^\+?[0-9]{7,15}$/, { message: "Invalid phone number format" })
      .optional(),

    picture: z
      .string()
      .url({ message: "Invalid picture URL" })
      .optional(),

    address: z
      .string()
      .max(255, { message: "Address is too long" })
      .optional(),

    role: z.nativeEnum(Role).default(Role.Rider),

    isActive: z.nativeEnum(IsActive).default(IsActive.ACTIVE),

    auths: z.array(authProviderSchema).optional(),

    isDeleted: z.boolean().default(false).optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

