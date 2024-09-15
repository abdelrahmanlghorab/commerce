import { TestBed } from '@angular/core/testing';

import { ProductsRequetsService } from './products-requets.service';

describe('ProductsRequetsService', () => {
  let service: ProductsRequetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsRequetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
