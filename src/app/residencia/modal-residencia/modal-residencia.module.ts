import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalResidenciaPageRoutingModule } from './modal-residencia-routing.module';

import { ModalResidenciaPage } from './modal-residencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalResidenciaPageRoutingModule
  ],
  declarations: [ModalResidenciaPage]
})
export class ModalResidenciaPageModule {}
