import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalResidenciaPage } from './modal-residencia.page';

const routes: Routes = [
  {
    path: '',
    component: ModalResidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalResidenciaPageRoutingModule {}
