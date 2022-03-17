import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PierdeJuego2Component } from './pierde-juego2/pierde-juego2.component';
import { PierdeJuego2RoutingModule } from './pierde-juego2-routing.module';

@NgModule({
  declarations: [PierdeJuego2Component],
  imports: [CommonModule, PierdeJuego2RoutingModule],
})
export class PierdeJuego2Module {}
