import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';



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
    CommonModule
  ]
})
export class SharedModule { }
