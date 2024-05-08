import { Component, } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'home-home-page',
  templateUrl: './home-page.component.html',
})

export class HomePageComponent {

  // public sidebarItems = [
  //   {label: 'calculator', icon: 'label', url: './calculator'},
  //   {label: 'history', icon: 'add', url: './history'},

  //   //TODO: En caso de añadir mas funcionalidades a la  calculadora
  // //   {label: 'Buscar', icon: 'search', url: './search'},
  // ];

  constructor( private authService:AuthService) {}

  onLogout() {
    this.authService.logout();
  }
}


