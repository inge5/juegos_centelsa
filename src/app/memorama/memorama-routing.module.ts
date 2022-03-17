import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemoramaComponent } from './memorama/memorama.component';

const routes: Routes = [{ path: '', component: MemoramaComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemoramaRoutingModule {}
