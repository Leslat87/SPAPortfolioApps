import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'crud-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: 'Listado', icon: 'label', url: './list'},
    {label: 'Añadir', icon: 'add', url: './new-image'},
    {label: 'Buscar', icon: 'search', url: './search'},
  ];

  constructor( private authService:AuthService) {}

  onLogout() {
    this.authService.logout();
  }

}