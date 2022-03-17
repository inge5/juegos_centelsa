import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GanaJuego2Component } from './gana-juego2/gana-juego2.component';

const routes: Routes = [
  {
    path: '',
    component: GanaJuego2Component,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GanaJuego2RoutingModule {}
