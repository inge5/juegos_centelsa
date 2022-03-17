import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortadaComponent } from './portada/portada.component';

const routes: Routes = [{ path: '', component: PortadaComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortadaRoutingModule {}
