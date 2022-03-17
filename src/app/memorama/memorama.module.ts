import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemoramaComponent } from './memorama/memorama.component';
import { MemoramaRoutingModule } from './memorama-routing.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [MemoramaComponent],
  imports: [CommonModule, MemoramaRoutingModule, ComponentsModule],
})
export class MemoramaModule {}
