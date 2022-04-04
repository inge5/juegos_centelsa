import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { GanaJuego1Component } from './gana-juego1/gana-juego1.component';
import { GanaJuego2Component } from './gana-juego2/gana-juego2.component';
import { MemoramaComponent } from './memorama/memorama.component';
import { PierdeJuego1Component } from './pierde-juego1/pierde-juego1.component';
import { PierdeJuego2Component } from './pierde-juego2/pierde-juego2.component';
import { PortadaComponent } from './portada/portada.component';

const routes: Routes = [
  {
    path: '',
    component: PortadaComponent,
  },
  {
    path: 'memorama',
    component: MemoramaComponent,
  },
  {
    path: 'ahorcado',
    component: AhorcadoComponent,
  },
  {
    path: 'gana',
    component: GanaJuego2Component,
  },
  {
    path: 'pierde',
    component: PierdeJuego2Component,
  },
  {
    path: 'gana-juego',
    component: GanaJuego1Component,
  },
  {
    path: 'pierde-juego',
    component: PierdeJuego1Component,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
