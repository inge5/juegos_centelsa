import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanaJuego2RoutingModule } from './gana-juego2/gana-juego2-routing.module';
import { MemoramaRoutingModule } from './memorama/memorama-routing.module';
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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    PortadaRoutingModule,
    MemoramaRoutingModule,
    GanaJuego2RoutingModule,
    PierdeJuego2RoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
