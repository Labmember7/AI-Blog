import { TestBed } from '@angular/core/testing';

import { BlogsFetcherService } from './blogs-fetcher.service';

describe('BlogsServiceService', () => {
  let service: BlogsFetcherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsFetcherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
