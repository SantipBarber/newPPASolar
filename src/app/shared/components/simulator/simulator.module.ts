import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import * as echarts from 'echarts';
import { NgxEchartsModule} from "ngx-echarts";

import { SimulatorRoutingModule } from './simulator-routing.module';
import { InputdataComponent } from './inputdata/inputdata.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ContactComponent} from "./contact/contact.component";
import { ChartComponent } from './chart/chart.component';
import {CustomCurrencyPipe} from "../../../custom-currency.pipe";


@NgModule({
  declarations: [
    InputdataComponent,
    ContactComponent,
    ChartComponent,
    CustomCurrencyPipe
  ],
  imports: [
    CommonModule,
    SimulatorRoutingModule,
    ReactiveFormsModule,
    NgxEchartsModule.forRoot({
      echarts
    })
  ]
})
export class SimulatorModule { }
