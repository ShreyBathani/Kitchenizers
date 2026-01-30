import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  attachmentUrls: z
  .array(z.string().url())
  .optional()
  .default([]),
  discoveryCall: z.boolean().optional().default(false)
});
