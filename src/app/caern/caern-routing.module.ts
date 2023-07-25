import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaernPage } from './caern.page';

const routes: Routes = [
  {
    path: '',
    component: CaernPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaernPageRoutingModule {}
