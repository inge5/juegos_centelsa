import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanaJuego1Component } from './gana-juego1/gana-juego1.component';

const routes: Routes = [
  {
    path: '',
    component: GanaJuego1Component,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanaJuego1RoutingModule {}
