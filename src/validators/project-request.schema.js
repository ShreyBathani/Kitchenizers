import { z } from 'zod';

export const projectRequestSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  serviceType: z.string().min(1),
  budgetRange: z.string().optional(),
  description: z.string().min(10),
  discoveryCall: z.boolean().default(false)
});
