import { TestBed, inject } from '@angular/core/testing';

import { UrlDecodderService } from './url-decodder.service';

describe('UrlDecodderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlDecodderService]
    });
  });

  it('should be created', inject([UrlDecodderService], (service: UrlDecodderService) => {
    expect(service).toBeTruthy();
  }));
});
