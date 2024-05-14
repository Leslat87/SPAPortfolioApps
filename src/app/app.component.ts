import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

interface MenuItem {
  name: string;
  route: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title = 'Portafolio';

  menuItems: MenuItem[] = [
    {name: 'HOME', route: 'home'},
    {name: 'PORTAFOLIO', route: 'portafolio'},
    {name: 'WEATHERAPP', route: 'tiempo'},
    {name: 'TAREASAPP', route: 'tareas/tareas'},
    {name: 'GIFSSAPP', route: 'gifss'},
    {name: 'BANDERAS', route: 'banderas'},
    {name: 'MAPAS', route: 'selectoresmapa'},
    {name: 'LOGIN', route: 'login'},
  ];

  constructor(
    private authService: AuthService
  ) {}

  //PARA OBTENER EL USUARIO ACTUAL Y SACARLO POR PANTALLA
  get currentuserValue() {
    return this.authService.currentuserValue;
  }

  //PARA CERRAR SESION
  onLogout() {
    this.authService.logout();
    window.location.reload();
  }

}

