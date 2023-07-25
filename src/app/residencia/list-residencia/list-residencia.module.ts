import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListResidenciaPageRoutingModule } from './list-residencia-routing.module';

import { ListResidenciaPage } from './list-residencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListResidenciaPageRoutingModule
  ],
  declarations: [ListResidenciaPage]
})
export class ListResidenciaPageModule {}
