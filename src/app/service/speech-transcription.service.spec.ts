import { TestBed } from '@angular/core/testing';

import { SpeechTranscriptionService } from './speech-transcription.service';

describe('SpeechTranscriptionService', () => {
  let service: SpeechTranscriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechTranscriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
