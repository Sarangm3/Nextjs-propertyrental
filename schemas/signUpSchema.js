import { string, z } from 'zod';

export const signUpSchema = z.object({
  code: z.string().length(6, 'OPT must be 6 digit'),
});
