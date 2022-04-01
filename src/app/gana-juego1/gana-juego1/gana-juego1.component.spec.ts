import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaJuego1Component } from './gana-juego1.component';

describe('GanaJuego1Component', () => {
  let component: GanaJuego1Component;
  let fixture: ComponentFixture<GanaJuego1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanaJuego1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanaJuego1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
