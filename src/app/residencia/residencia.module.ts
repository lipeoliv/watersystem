import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResidenciaPageRoutingModule } from './residencia-routing.module';

import { ResidenciaPage } from './residencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResidenciaPageRoutingModule
  ],
  declarations: [ResidenciaPage]
})
export class ResidenciaPageModule {}
