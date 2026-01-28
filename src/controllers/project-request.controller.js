import { projectRequestSchema } from '../validators/project-request.schema.js';
import { handleProjectRequest } from '../services/project-request.service.js';

export async function submitProjectRequest(req, res, next) {
  try {
    const data = projectRequestSchema.parse(req.body);

    await handleProjectRequest(data);

    res.status(200).json({
      success: true,
      message: 'Project request submitted successfully'
    });
  } catch (error) {
    next(error);
  }
}
