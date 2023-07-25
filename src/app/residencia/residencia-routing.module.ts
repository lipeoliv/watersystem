import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResidenciaPage } from './residencia.page';

const routes: Routes = [
  {
    path: '',
    component: ResidenciaPage
  },  {
    path: 'modal-residencia',
    loadChildren: () => import('./modal-residencia/modal-residencia.module').then( m => m.ModalResidenciaPageModule)
  },
  {
    path: 'list-residencia',
    loadChildren: () => import('./list-residencia/list-residencia.module').then( m => m.ListResidenciaPageModule)
  },
  {
    path: 'edit-residencia',
    loadChildren: () => import('./edit-residencia/edit-residencia.module').then( m => m.EditResidenciaPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResidenciaPageRoutingModule {}
