import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComprasEVendasComponent } from './compras-e-vendas.component';

describe('ComprasEVendasComponent', () => {
  let component: ComprasEVendasComponent;
  let fixture: ComponentFixture<ComprasEVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComprasEVendasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComprasEVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
