import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChapterAdnanComponent } from './chapter-adnan/chapter-adnan.component';
import { ChapterKhurramComponent } from './chapter-khurram/chapter-khurram.component';
import { ChapterRubabComponent } from './chapter-rubab/chapter-rubab.component';
import { WeclomePageComponent } from './weclome-page/weclome-page.component';
import { WeatherInfoComponent } from './chapter-adnan/weather-info/weather-info.component';

import { HighchartsChartModule } from 'highcharts-angular';
import { HighchartsComponent } from './chapter-khurram/highcharts/highcharts.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegistrationComponent } from './chapter-khurram/registration/registration.component';


@NgModule({
  declarations: [
    AppComponent,
    WeclomePageComponent,
    ChapterAdnanComponent,
    ChapterKhurramComponent,
    ChapterRubabComponent,
    WeatherInfoComponent,
    HighchartsComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
