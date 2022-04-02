import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartasMemoramaComponent } from './cartas-memorama/cartas-memorama.component';
import { FinDelJuegoComponent } from './fin-del-juego/fin-del-juego.component';
import { RouterModule } from '@angular/router';
import { FinDelJuego1Component } from './fin-del-juego1/fin-del-juego1.component';

@NgModule({
  declarations: [
    CartasMemoramaComponent,
    FinDelJuegoComponent,
    FinDelJuego1Component,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CartasMemoramaComponent,
    FinDelJuegoComponent,
    FinDelJuego1Component,
  ],
})
export class ComponentsModule {}
