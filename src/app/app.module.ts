import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import  {HttpClientModule} from '@angular/common/http'

import { ApiMqtt } from '../services/api.mqtt';
import { Api } from '../services/api';
import { GlobalVar } from '../globals/global';

@NgModule({
  declarations: [AppComponent],
  imports: [ HttpClientModule,BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule], 
  providers: [GlobalVar, Api, ApiMqtt, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
