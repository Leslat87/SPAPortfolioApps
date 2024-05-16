import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './Apps-Tools/home.module';


<<<<<<< Updated upstream
=======
import { AppCalculatorModule } from './Apps-Tools/app-calculator/app-calculator.module';
import { AppCountriesModule } from './Apps-Tools/app-countries/app-countries.module';
import { AppCrudModule } from './Apps-Tools/app-crud/app-crud.module';

import { AppTasksListModule } from './Apps-Tools/app-tasks/app-taskslist.module';
import { AppWeatherModule } from './Apps-Tools/app-weather/app-weather.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { HomePageModule } from './Apps-Tools/home/home.module';

import { AppPrincipalModule } from './Apps-Tools/app-principal/app-principal.module';
import { AppGifsModule } from './Apps-Tools/app-gifs/app-gifs.module';
>>>>>>> Stashed changes



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,



  ],
  exports: [





  ],

  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
