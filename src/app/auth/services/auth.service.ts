// src/app/auth/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environments } from '../../../app/environments/environments';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private baseUrl: string = environments.baseUrl;
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<any> {
    return this.http.get<any[]>(`${this.baseUrl}/users?email=${email}&password=${password}`).pipe(
      map(users => {
        if (users && users.length) {
          const user = users[0];
          localStorage.setItem('currentUser', JSON.stringify(user));
          localStorage.setItem('role', user.role);
          localStorage.setItem('user', user.user);
          this.currentUserSubject.next(user);
          return user;
        }
        return null;
      }),
      catchError(error => {
        console.error('Login error', error);
        return of(null);
      })
    );
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
    localStorage.removeItem('user');
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }
}
