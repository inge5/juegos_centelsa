import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PierdeJuego1Component } from './pierde-juego1.component';

describe('PierdeJuego1Component', () => {
  let component: PierdeJuego1Component;
  let fixture: ComponentFixture<PierdeJuego1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PierdeJuego1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PierdeJuego1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
