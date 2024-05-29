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

    if (token && role) {
      const expectedRole = route.data['role'];
      if (!expectedRole || expectedRole === role || role === 'Admin') {
        return true;
      } else {
        // Redirigir si el rol no coincide
        this.router.navigate(['/auth/login']);
        return false;
      }
    }

    // Redirigir a la página de login si no está autenticado
    this.router.navigate(['/auth/login']);
    return false;
  }
}
