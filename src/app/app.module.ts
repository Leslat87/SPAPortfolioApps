import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule  } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
<<<<<<< Updated upstream
import { HomeModule } from './Apps-Tools/home.module';
=======
import { HomeComponent } from './Apps-Tools/home.component';
import { MenuService } from './shared/components/menu/services/menu.service';

>>>>>>> Stashed changes





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule,
    HomeModule,



  ],
  exports: [





  ],

  providers: [
    MenuService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
