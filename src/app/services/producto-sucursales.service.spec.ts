import { TestBed } from '@angular/core/testing';

import { ProductoSucursalesService } from './producto-sucursales.service';

describe('ProductoSucursalesService', () => {
  let service: ProductoSucursalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoSucursalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
