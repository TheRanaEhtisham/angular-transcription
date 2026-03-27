import { TestBed } from '@angular/core/testing';

import { AudioValidationService } from './audio-validation.service';

describe('AudioValidationService', () => {
  let service: AudioValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AudioValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
