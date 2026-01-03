import { z } from "zod";

export const schema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email address").min(1, "Email is required"),
    password: z.string().min(5, "Password must be at least 5 characters long"),
    confirmPassword: z
      .string()
      .min(5, "Confirm Password must be at least 5 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

//Aca se acaba de generar un tipado de TypeScript a partir del esquema de validación definido con Zod.
export type FormValues = z.infer<typeof schema>;