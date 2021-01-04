import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarExcluirComponent } from './criar-excluir.component';

describe('CriarExcluirComponent', () => {
  let component: CriarExcluirComponent;
  let fixture: ComponentFixture<CriarExcluirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarExcluirComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarExcluirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
