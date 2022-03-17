import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartasMemoramaComponent } from './cartas-memorama/cartas-memorama.component';
import { FinDelJuegoComponent } from './fin-del-juego/fin-del-juego.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CartasMemoramaComponent, FinDelJuegoComponent],
  imports: [CommonModule, RouterModule],
  exports: [CartasMemoramaComponent, FinDelJuegoComponent],
})
export class ComponentsModule {}
