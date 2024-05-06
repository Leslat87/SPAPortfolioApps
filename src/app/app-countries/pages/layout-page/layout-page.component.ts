import { Component } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'country-layout-page',
  templateUrl: './layout-page.component.html',
  styles: ``
})
export class LayoutPageComponent {

  public sidebarItems = [
    {label: 'capital', icon: 'label', url: './by-capital'},
    {label: 'country', icon: 'add', url: './by-country'},
    {label: 'region', icon: 'search', url: './by-region'},
    {label: 'by/:id', icon: 'search', url: './by/:id'},
  ];

  constructor( private authService:AuthService) {}

  onLogout() {
    this.authService.logout();
  }

}
