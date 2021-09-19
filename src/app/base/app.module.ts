import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from "../shared/components/navbar/navbar.component";
import {HeaderComponent} from "../shared/components/header/header.component";
import {CarouselComponent} from "../shared/components/carousel/carousel.component";
import {FooterComponent} from "../shared/components/footer/footer.component";
import {AboutComponent} from "../shared/components/about/about.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from "../shared/components/home/home.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
