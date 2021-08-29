import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../shared/components/home/home.component";
import {SimulatorComponent} from "../shared/components/simulator/simulator.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'simulator', component: SimulatorComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    })],
    declarations: [
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
