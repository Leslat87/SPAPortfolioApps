import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const token = localStorage.getItem('token');
    const role = localStorage.getItem('role');
    const userId = localStorage.getItem('userId');

    if (token && role) {
      const expectedRole = route.data['role'];

      // Verificar si el rol coincide o es 'Admin'
      if (expectedRole && expectedRole !== role && role !== 'Admin') {
        this.router.navigate(['/auth/login']);
        return false;
      }

      // Verificar que el userId en la URL coincide con el userId almacenado en localStorage
      if (route.params['id'] && route.params['id'] !== userId) {
        // Redirigir al usuario a su propia ruta de tareas si intenta acceder a otra
        this.router.navigate([`/tasks/${userId}`]);
        return false;
      }

      return true;
    }

    // Redirigir a la página de login si no está autenticado
    this.router.navigate(['/auth/login']);
    return false;
  }
}
