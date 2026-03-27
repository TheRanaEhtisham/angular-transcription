import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AudioValidationService {
  private allowedTypes = ['audio/wav', 'audio/mpeg', 'audio/mp3', 'audio/ogg', 'audio/flac'];
  private maxSize = 10 * 1024 * 1024; // 10 MB

  validateAudioFile(file: File): { valid: boolean; message?: string } {
    if (!file) return { valid: false, message: 'No file provided' };
    if (!this.allowedTypes.includes(file.type)) return { valid: false, message: 'Invalid file type' };
    if (file.size > this.maxSize) return { valid: false, message: 'File size exceeds 10MB' };
    return { valid: true };
  }
}