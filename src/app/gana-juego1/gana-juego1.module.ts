import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GanaJuego1Component } from './gana-juego1/gana-juego1.component';
import { ComponentsModule } from '../components/components.module';
import { GanaJuego1RoutingModule } from './gana-juego1-routing.module';

@NgModule({
  declarations: [GanaJuego1Component],
  imports: [CommonModule, ComponentsModule, GanaJuego1RoutingModule],
})
export class GanaJuego1Module {}
