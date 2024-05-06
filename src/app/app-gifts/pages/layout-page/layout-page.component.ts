import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'gifts-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {


  //TODO: lo tenemos asi pendiente de modificar por la columna que se buscar
  public sidebarItems = [
    {label: 'gifts', icon: 'label', url: './gifts'},

    //TODO: PEndiente de decision sobre que incluir
    // {label: 'Añadir', icon: 'add', url: './new-image'},
    // {label: 'Buscar', icon: 'search', url: './search'},
  ];

  constructor( private authService:AuthService) {}

  onLogout() {
    this.authService.logout();
  }

}
