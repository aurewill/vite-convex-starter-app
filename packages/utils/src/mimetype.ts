import { MIME_TYPES } from "@mantine/dropzone";
import { InvertStringStringRecord } from "./types";

export const FILE_EXT_TO_MIME_TYPE = MIME_TYPES;

export const MIME_TYPE_TO_FILE_EXT = {
  "image/png": "png",
  "image/gif": "gif",
  "image/jpeg": "jpeg",
  "image/svg+xml": "svg",
  "image/webp": "webp",
  "image/avif": "avif",
  "image/heic": "heic",
  "image/heif": "heif",
  "video/mp4": "mp4",
  "application/zip": "zip",
  "application/x-rar": "rar",
  "application/x-7z-compressed": "7z",
  "text/csv": "csv",
  "application/pdf": "pdf",
  "application/msword": "doc",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
    "docx",
  "application/vnd.ms-excel": "xls",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "xlsx",
  "application/vnd.ms-powerpoint": "ppt",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation":
    "pptx",
  "application/vnd.microsoft.portable-executable": "exe",
} satisfies InvertStringStringRecord<typeof FILE_EXT_TO_MIME_TYPE>;
