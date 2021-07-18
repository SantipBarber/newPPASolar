import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from "../shared/components/navbar/navbar.component";
import {HeaderComponent} from "../shared/components/header/header.component";
import {CarouselComponent} from "../shared/components/carousel/carousel.component";
import {FooterComponent} from "../shared/components/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    CarouselComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
