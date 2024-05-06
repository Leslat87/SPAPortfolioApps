import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';


import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { MenuComponent } from './components/menu/menu.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
    SidebarComponent,
    Error404PageComponent,
    AboutPageComponent,
    ContactPageComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    AboutPageComponent,
    ContactPageComponent,
    Error404PageComponent,
    HomePageComponent,
    MenuComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    SearchBoxComponent,
  ]
})
export class SharedModule { }
