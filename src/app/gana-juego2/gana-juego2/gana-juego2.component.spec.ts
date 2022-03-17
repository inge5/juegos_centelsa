import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GanaJuego2Component } from './gana-juego2.component';

describe('GanaJuego2Component', () => {
  let component: GanaJuego2Component;
  let fixture: ComponentFixture<GanaJuego2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GanaJuego2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GanaJuego2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
