import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SpeechTranscriptionService {
  private recognition: any;

  constructor() {
    const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (SpeechRecognition) {
      this.recognition = new SpeechRecognition();
      this.recognition.lang = 'en-US';
      this.recognition.continuous = false;
      this.recognition.interimResults = false;
    }
  }

  startTranscription(): Observable<string> {
    return new Observable(observer => {
      if (!this.recognition) {
        observer.error('Speech recognition not supported');
        return;
      }
      this.recognition.start();
      this.recognition.onresult = (event: any) => {
        observer.next(event.results[0][0].transcript);
        observer.complete();
      };
      this.recognition.onerror = (err: any) => observer.error(err);
    });
  }

  stopTranscription() {
    if (this.recognition) this.recognition.stop();
  }
}