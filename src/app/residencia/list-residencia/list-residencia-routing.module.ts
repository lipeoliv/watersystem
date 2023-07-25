import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListResidenciaPage } from './list-residencia.page';

const routes: Routes = [
  {
    path: '',
    component: ListResidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListResidenciaPageRoutingModule {}
