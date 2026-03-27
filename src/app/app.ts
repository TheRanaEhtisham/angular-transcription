import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AudioValidationService } from './service/audio-validation.service';
import { TranscriptionService } from './service/transcription.service';
import { DecimalPipe } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DecimalPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-transcription-app');

   selectedFile: File | null = null;
  segments: any[] = [];

  constructor(
    private validationService: AudioValidationService,
    private transcriptionService: TranscriptionService
  ) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    const result = this.validationService.validateAudioFile(file);
    if (!result.valid) { alert(result.message); return; }
    this.selectedFile = file;
  }

  uploadFile() {
    if (!this.selectedFile) return;
    this.transcriptionService.uploadAudio(this.selectedFile)
      .subscribe((res: { segments: any[]; }) => this.segments = res.segments, (err: any) => console.error(err));
  }
}
