import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoRoutingModule } from './ahorcado/ahorcado-routing.module';
import { AhorcadoComponent } from './ahorcado/ahorcado/ahorcado.component';
import { GanaJuego1RoutingModule } from './gana-juego1/gana-juego1-routing.module';
import { GanaJuego2RoutingModule } from './gana-juego2/gana-juego2-routing.module';
import { MemoramaRoutingModule } from './memorama/memorama-routing.module';
import { PierdeJuego1RoutingModule } from './pierde-juego1/pierde-juego1-routing.module';
import { PierdeJuego2RoutingModule } from './pierde-juego2/pierde-juego2-routing.module';
import { PortadaRoutingModule } from './portada/portada-routing.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./portada/portada.module').then((m) => m.PortadaModule),
  },
  {
    path: 'memorama',
    loadChildren: () =>
      import('./memorama/memorama.module').then((m) => m.MemoramaModule),
  },
  {
    path: 'ahorcado',
    loadChildren: () =>
      import('./ahorcado/ahorcado.module').then((m) => m.AhorcadoModule),
  },
  {
    path: 'gana',
    loadChildren: () =>
      import('./gana-juego2/gana-juego2.module').then(
        (m) => m.GanaJuego2Module
      ),
  },
  {
    path: 'pierde',
    loadChildren: () =>
      import('./pierde-juego2/pierde-juego2.module').then(
        (m) => m.PierdeJuego2Module
      ),
  },
  {
    path: 'gana-juego',
    loadChildren: () =>
      import('./gana-juego1/gana-juego1.module').then(
        (m) => m.GanaJuego1Module
      ),
  },
  {
    path: 'pierde-juego',
    loadChildren: () =>
      import('./pierde-juego1/pierde-juego1.module').then(
        (m) => m.PierdeJuego1Module
      ),
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    PortadaRoutingModule,
    MemoramaRoutingModule,
    GanaJuego2RoutingModule,
    PierdeJuego2RoutingModule,
    GanaJuego1RoutingModule,
    PierdeJuego1RoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
