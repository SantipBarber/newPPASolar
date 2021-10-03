import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InputdataComponent} from "./inputdata/inputdata.component";
import {SimulatorComponent} from "./simulator.component";
import {ChartComponent} from "./chart/chart.component";

const routes: Routes = [
  { path: '', component: SimulatorComponent, children: [
      {path: '', component: InputdataComponent},
      {path: 'chart', component: ChartComponent}
    ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulatorRoutingModule { }
