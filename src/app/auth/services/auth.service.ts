import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../environments/environments';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = `${environment.baseUrl}/auth/login`;
  private baseUrl: string = environment.baseUrl;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    // Cargar el usuario actual desde el localStorage o establecer un objeto vacío
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<boolean> {
    // Anular la validación de credenciales
    const user = { email, password, id: 'dummy-id', role: 'Admin' };
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('userId', user.id);
    localStorage.setItem('role', user.role);
    localStorage.setItem('token', 'fake-jwt-token');
    this.currentUserSubject.next(user);
    this.router.navigate(['/home']);
    return of(true);
  }

  register(user: string, email: string, password: string, role: string = 'User'): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users`, { user, email, password, role }).pipe(
      catchError(error => {
        console.error('Registration error', error);
        return of(null);
      })
    );
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('role');
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    this.currentUserSubject.next(null);
    // Redirigir a la página de login después de limpiar el estado del usuario
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}
