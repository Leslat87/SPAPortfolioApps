import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
  public user: string = '';
  public email: string = '';
  public password: string = '';
  public role: string = 'User'; // Default role

  constructor(private authService: AuthService, private router: Router) {}

  register(): void {
    this.authService.register(this.user, this.email, this.password, this.role).subscribe((response: any) => {
      if (response) {
        console.log('Registration successful:', response);
        this.router.navigate(['/auth/login']);
      } else {
        console.error('Registration failed');
      }
    });
  }
}
