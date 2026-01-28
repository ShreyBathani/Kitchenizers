import { contactSchema } from '../validators/contact.schema.js';
import { handleContactMessage } from '../services/contact.service.js';
import { success } from 'zod';

export async function submitContactMessage(req, res, next) {
  try {
    const data = contactSchema.parse(req.body);

    await handleContactMessage(data);

    res.status(200).json({
        success: true,
        message: 'Message sent successfully'
    });
  } catch (error) {
    next(error);
  }
}
