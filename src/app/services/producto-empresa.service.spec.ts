import { TestBed } from '@angular/core/testing';

import { ProductoEmpresaService } from './producto-empresa.service';

describe('ProductoEmpresaService', () => {
  let service: ProductoEmpresaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductoEmpresaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
