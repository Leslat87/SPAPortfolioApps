import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principalpage',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {
  role: string | null = null;
  userId: string | null = null;

  calculatorSection = {
    title: 'Calculator',
    link: '', // Esto se establecerá en ngOnInit
    buttonText: 'Go to Calculator'
  };

  countriesSection = {
    title: 'Countries',
    link: '/countries',
  };

  crudsection = {
    title: 'CRUD',
    link: '/crud',
    buttonText: 'Go to Crud'
  };

  gifsSection = {
    title: 'Gifs',
    link: '/gifs',
    buttonText: 'Go to Gifs'
  };

  tasksSection = {
    title: 'Tasks',
    link: '',
    buttonText: 'Go to Tasks'
  };

  weatherSection = {
    title: 'Weather',
    link: '/weather',
    buttonText: 'Go to Weather'
  };

  constructor() { }

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.userId = localStorage.getItem('userId');

    if (this.userId) {
      this.calculatorSection.link = `/calculator/${this.userId}`;
    }
    if (this.userId) {
      this.tasksSection.link = `/tasks/${this.userId}`;
    }
  }

  isUser(): boolean {
    return this.role === 'User';
  }

  isAdmin(): boolean {
    return this.role === 'Admin';
  }
}
