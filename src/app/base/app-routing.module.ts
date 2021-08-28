import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContactComponent} from "../shared/components/contact/contact.component";
import {HomeComponent} from "../shared/components/home/home.component";
import {AboutComponent} from "../shared/components/about/about.component";

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
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
