import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'calculator-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: 'calculator', icon: 'label', url: './calculator'},
    {label: 'history', icon: 'add', url: './history'},

    //TODO: En caso de añadir mas funcionalidades a la  calculadora
  //   {label: 'Buscar', icon: 'search', url: './search'},
  ];

  constructor( private authService:AuthService) {}

  onLogout() {
    this.authService.logout();
  }

}
