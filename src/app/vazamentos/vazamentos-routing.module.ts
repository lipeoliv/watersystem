import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VazamentosPage } from './vazamentos.page';

const routes: Routes = [
  {
    path: '',
    component: VazamentosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VazamentosPageRoutingModule {}
