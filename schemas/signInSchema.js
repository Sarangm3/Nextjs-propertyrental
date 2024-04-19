import { string, z } from 'zod';

export const userNameValidation = z
  .string()
  .min(2, 'Username be At least 2 characters')
  .max(20, 'Username be At most 20 characters')
  .regex(/^[a-zA-Z0-9_]+$/, 'Username contains special characters');

export const signInSchema = z.object({
  username: userNameValidation,
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'password must at least 6 characters' }),
});
