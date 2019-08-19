import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {NguCarouselModule } from '@ngu/carousel';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NguCarouselModule ],
  declarations: [ AppComponent, CarouselComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
