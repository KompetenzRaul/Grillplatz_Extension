import { TestBed } from '@angular/core/testing';

import { AuswahlService } from '../services/auswahl.service';

describe('AuswahlService', () => {
  let service: AuswahlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuswahlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
