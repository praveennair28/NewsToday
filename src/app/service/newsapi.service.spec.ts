import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NewsapiService } from './newsapi.service';

describe('NewsapiService', () => {
  let service: NewsapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(NewsapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
