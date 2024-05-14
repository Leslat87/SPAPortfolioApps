import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent implements OnInit {

  constructor( private authService: AuthService,
    private router: Router
  ) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  onLogin() : void {

    this.authService.login( 'ismael@gmail.com', '123456' )
     .subscribe( user => {

        this.router.navigate([ '/' ]);
      });
  }
}
