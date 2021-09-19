import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulatorRoutingModule } from './simulator-routing.module';
import { InputdataComponent } from './inputdata/inputdata.component';
import {ContactComponent} from "./contact/contact.component";
import {SimulatorComponent} from "./simulator.component";
import {AboutComponent} from "../about/about.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SimulatorComponent,
    InputdataComponent,
    //ContactComponent,
    //AboutComponent
  ],
  imports: [
    CommonModule,
    SimulatorRoutingModule,
    ReactiveFormsModule
  ]
})
export class SimulatorModule { }
