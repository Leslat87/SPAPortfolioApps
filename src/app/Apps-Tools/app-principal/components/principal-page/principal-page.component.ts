import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principalpage',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {
  role: string | null = null;

  calculatorSection = {
    title: 'Calculator',
    link: '/calculator', // Aquí deberías poner la ruta correcta a la sección de Calculator
    buttonText: 'Go to Calculator'
  };

  countriesSection = {
    title: 'Countries',
    link: '/countries', // Aquí deberías poner la ruta correcta a la sección de Countries
    buttonText: 'Go to Countries'
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
    link: '/tasks',
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
  }

  isUser(): boolean {
    return this.role === 'User';
  }

  isAdmin(): boolean {
    return this.role === 'Admin';
  }
}
