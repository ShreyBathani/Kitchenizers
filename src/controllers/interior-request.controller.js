import { interiorRequestSchema } from '../validators/interior-request.schema.js';
import { handleInteriorRequest } from '../services/interior-request.service.js';

export async function submitInteriorRequest(req, res, next) {
  try {
    const data = interiorRequestSchema.parse(req.body);

    await handleInteriorRequest(data);

    res.status(200).json({
      success: true,
      message: 'Interior project request submitted successfully'
    });
  } catch (error) {
    next(error);
  }
}
