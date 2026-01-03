import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.email('Invalid email address').min(1, 'Email is required'),
  password: z.string().min(5, "Password must be at least 5 characters long"),
  confirmPassword: z.string().min(5, "Confirm Password must be at least 5 characters long"),
});