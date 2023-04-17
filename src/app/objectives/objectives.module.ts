import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ObjectivesRoutingModule } from './objectives-routing.module';
import { AddObjectiveComponent } from './add-objective/add-objective.component';


@NgModule({
  declarations: [
    AddObjectiveComponent
  ],
  imports: [
    CommonModule,
    ObjectivesRoutingModule
  ]
})
export class ObjectivesModule { }
