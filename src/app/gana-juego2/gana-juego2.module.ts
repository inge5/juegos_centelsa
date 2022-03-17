import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanaJuego2Component } from './gana-juego2/gana-juego2.component';
import { GanaJuego2RoutingModule } from './gana-juego2-routing.module';

@NgModule({
  declarations: [GanaJuego2Component],
  imports: [CommonModule, GanaJuego2RoutingModule],
})
export class GanaJuego2Module {}
