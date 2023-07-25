import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditResidenciaPage } from './edit-residencia.page';

const routes: Routes = [
  {
    path: '',
    component: EditResidenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditResidenciaPageRoutingModule {}
