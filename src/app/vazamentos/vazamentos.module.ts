import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VazamentosPageRoutingModule } from './vazamentos-routing.module';

import { VazamentosPage } from './vazamentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VazamentosPageRoutingModule
  ],
  declarations: [VazamentosPage]
})
export class VazamentosPageModule {}
