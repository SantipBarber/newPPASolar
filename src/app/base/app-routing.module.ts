import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "../shared/components/home/home.component";
import {ContactComponent} from "../shared/components/simulator/contact/contact.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  //{ path: '**', redirectTo: 'home', pathMatch: 'full' },
  { path: 'simulator', loadChildren: () => import('../shared/components/simulator/simulator.module').then(m => m.SimulatorModule) }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      enableTracing: false
    })],
    declarations: [
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
