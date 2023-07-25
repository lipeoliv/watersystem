import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditResidenciaPageRoutingModule } from './edit-residencia-routing.module';

import { EditResidenciaPage } from './edit-residencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditResidenciaPageRoutingModule
  ],
  declarations: [EditResidenciaPage]
})
export class EditResidenciaPageModule {}
