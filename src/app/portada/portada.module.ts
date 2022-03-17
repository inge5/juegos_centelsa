import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortadaComponent } from './portada/portada.component';
import { PortadaRoutingModule } from './portada-routing.module';

@NgModule({
  declarations: [PortadaComponent],
  imports: [CommonModule, PortadaRoutingModule],
})
export class PortadaModule {}
