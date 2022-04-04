import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinDelJuegoComponent } from './fin-del-juego.component';

describe('FinDelJuegoComponent', () => {
  let component: FinDelJuegoComponent;
  let fixture: ComponentFixture<FinDelJuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinDelJuegoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinDelJuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
