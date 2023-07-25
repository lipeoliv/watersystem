import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaernPageRoutingModule } from './caern-routing.module';

import { CaernPage } from './caern.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaernPageRoutingModule
  ],
  declarations: [CaernPage]
})
export class CaernPageModule {}
