import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from "../header/header.component";
import {CarouselComponent} from "../carousel/carousel.component";
import {AboutComponent} from "../about/about.component";



@NgModule({
  declarations: [
    HeaderComponent,
    CarouselComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
