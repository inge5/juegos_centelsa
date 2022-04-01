import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PierdeJuego1Component } from './pierde-juego1/pierde-juego1.component';

const routes: Routes = [
  {
    path: '',
    component: PierdeJuego1Component,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PierdeJuego1RoutingModule {}
