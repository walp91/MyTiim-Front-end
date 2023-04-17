import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../shared/modules/material.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from "../shared/shared.module";



@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    SharedModule,
  ]
  
})
export class HomeModule { }
