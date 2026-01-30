import {
  PutObjectCommand,
  GetObjectCommand
} from '@aws-sdk/client-s3';

import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import crypto from 'crypto';

import { s3Client } from '../utils/s3Client.js';
import { env } from '../config/env.js';

const MAX_FILE_SIZE = 70 * 1024 * 1024;

const ALLOWED_MIME_TYPES = [
  'application/pdf',
  'image/png',
  'image/jpeg',
  'image/jpg'
];

export async function generatePresignedUploadUrl({
  fileName,
  fileType,
  fileSize,
  folder = 'general'
}) {
  if (!fileName || !fileType || !fileSize) {
    throw new Error('Missing file parameters');
  }

  if (!ALLOWED_MIME_TYPES.includes(fileType)) {
    throw new Error('Unsupported file type');
  }

  if (fileSize > MAX_FILE_SIZE) {
    throw new Error('File size exceeds 70MB limit');
  }

  const extension = fileName.split('.').pop();
  const uniqueFileName = `${crypto.randomUUID()}.${extension}`;

  const key = `${env.aws.prefix}/${uniqueFileName}`;

  /* =========================
     PRESIGNED PUT (UPLOAD)
  ========================= */
  const putCommand = new PutObjectCommand({
    Bucket: env.aws.bucket,
    Key: key,
    ContentType: fileType
  });

  const uploadUrl = await getSignedUrl(s3Client, putCommand, {
    expiresIn: 60 * 5 // 5 min upload window is enough
  });

  /* =========================
     PRESIGNED GET (DOWNLOAD)
  ========================= */
  const getCommand = new GetObjectCommand({
    Bucket: env.aws.bucket,
    Key: key
  });

  const fileUrl = await getSignedUrl(s3Client, getCommand, {
    expiresIn: 60 * 60 * 24 * 7 // ✅ 7 days
  });

  return {
    uploadUrl,
    fileUrl, // ✅ signed download url
    key
  };
}
