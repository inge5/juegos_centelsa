import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PierdeJuego2Component } from './pierde-juego2.component';

describe('PierdeJuego2Component', () => {
  let component: PierdeJuego2Component;
  let fixture: ComponentFixture<PierdeJuego2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PierdeJuego2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PierdeJuego2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
