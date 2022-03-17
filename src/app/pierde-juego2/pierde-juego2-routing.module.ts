import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PierdeJuego2Component } from './pierde-juego2/pierde-juego2.component';

const routes: Routes = [
  {
    path: '',
    component: PierdeJuego2Component,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PierdeJuego2RoutingModule {}
