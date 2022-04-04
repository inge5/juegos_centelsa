import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinDelJuego1Component } from './fin-del-juego1.component';

describe('FinDelJuego1Component', () => {
  let component: FinDelJuego1Component;
  let fixture: ComponentFixture<FinDelJuego1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinDelJuego1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinDelJuego1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
