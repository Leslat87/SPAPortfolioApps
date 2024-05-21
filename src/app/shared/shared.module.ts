import { NgModule } from '@angular/core';

import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
<<<<<<< Updated upstream
=======
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
>>>>>>> Stashed changes


@NgModule({
  declarations: [
    AboutPageComponent,
    ContactPageComponent,
    Error404PageComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    MenuComponent,
    SearchBoxComponent,
    SidebarComponent,

  ],
  imports:[
    CommonModule,
<<<<<<< Updated upstream
=======
    RouterModule,
>>>>>>> Stashed changes
    MaterialModule,
    PrimeNgModule,


  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    Error404PageComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    MenuComponent,
    SearchBoxComponent,
    SidebarComponent,

  ]

})
export class SharedModule { }
