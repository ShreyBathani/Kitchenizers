import { z } from 'zod';

export const interiorRequestSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Invalid email'),
  phone: z.string().optional(),
  whatsappNumber: z.string().optional(),

  projectType: z.string().min(1, 'Project type is required'),
  package: z.string().min(1, 'Package is required'),

  attachmentUrl: z.string().url().optional(),

  projectDetails: z
    .string()
    .min(20, 'Project details must be at least 20 characters'),

  discoveryCall: z.boolean().optional().default(false)
});
