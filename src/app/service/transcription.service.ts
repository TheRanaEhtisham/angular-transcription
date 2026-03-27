import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Segment {
  start: number;
  end: number;
  text: string;
}

export interface TranscriptionResponse {
  segments: Segment[];
}

@Injectable({
  providedIn: 'root'
})
export class TranscriptionService {
  private apiUrl = 'http://localhost:5000/transcribe_segments';

  constructor(private http: HttpClient) {}

  uploadAudio(file: File): Observable<TranscriptionResponse> {
    const formData = new FormData();
    formData.append('audio', file);
    return this.http.post<TranscriptionResponse>(this.apiUrl, formData);
  }
}