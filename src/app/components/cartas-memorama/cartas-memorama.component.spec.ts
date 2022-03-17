import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasMemoramaComponent } from './cartas-memorama.component';

describe('CartasMemoramaComponent', () => {
  let component: CartasMemoramaComponent;
  let fixture: ComponentFixture<CartasMemoramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartasMemoramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartasMemoramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
