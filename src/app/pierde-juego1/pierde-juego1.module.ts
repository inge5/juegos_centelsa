import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PierdeJuego1Component } from './pierde-juego1/pierde-juego1.component';
import { ComponentsModule } from '../components/components.module';
import { PierdeJuego1RoutingModule } from './pierde-juego1-routing.module';

@NgModule({
  declarations: [PierdeJuego1Component],
  imports: [CommonModule, ComponentsModule, PierdeJuego1RoutingModule],
})
export class PierdeJuego1Module {}
