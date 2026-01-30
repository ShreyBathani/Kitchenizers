import { generatePresignedUploadUrl } from '../services/s3.service.js';

export async function createPresignedUpload(req, res, next) {
  try {
    const { fileName, fileType, fileSize, folder } = req.body;

    if (!fileName || !fileType || !fileSize) {
      return res.status(400).json({
        success: false,
        message: 'fileName, fileType and fileSize are required'
      });
    }

    const data = await generatePresignedUploadUrl({
      fileName,
      fileType,
      fileSize,
      folder
    });

    res.status(200).json({
      success: true,
      data
    });
  } catch (err) {
    next(err);
  }
}
