import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaSetorComponent } from './tabela-setor.component';

describe('TabelaSetorComponent', () => {
  let component: TabelaSetorComponent;
  let fixture: ComponentFixture<TabelaSetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaSetorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaSetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
