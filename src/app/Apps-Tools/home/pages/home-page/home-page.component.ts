import { Component, } from '@angular/core';
import { AuthService } from '../../../../auth/services/auth.service';


@Component({
  selector: 'home-home-page',
  templateUrl: './home-page.component.html',
})

export class HomePageComponent {


  constructor( private authService:AuthService) {}

  onLogout() {
    this.authService.logout();
  }
}


