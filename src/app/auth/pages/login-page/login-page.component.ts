// src/app/auth/pages/login-page/login-page.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public email: string = '';
  public password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.email, this.password).subscribe((response: any) => {
      if (response) {
        console.log('Login successful:', response);
        this.router.navigate(['/home']);
      } else {
        console.error('Login failed');
      }
    });
  }
}

