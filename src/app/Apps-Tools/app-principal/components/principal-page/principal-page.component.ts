import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principalpage',
  templateUrl: './principal-page.component.html',
  styleUrls: ['./principal-page.component.scss']
})
export class PrincipalPageComponent implements OnInit {

  calculatorSection = {
    title: 'Calculator',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non orci ac nulla tincidunt lobortis vel vel nulla.',
    link: '/app-calculator', // Aquí deberías poner la ruta correcta a la sección de Calculator
    buttonText: 'Go to Calculator'
  };

  countriesSection = {
    title: 'Countries',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non orci ac nulla tincidunt lobortis vel vel nulla.',
    link: '/app-countries', // Aquí deberías poner la ruta correcta a la sección de Countries
    buttonText: 'Go to Countries'
  };

  crudsection = {
    title: 'CRUD',
    description: 'Description for Card 3',
    link: '/app-crud',
    buttonText: 'Button Text for Card 3'
  };

  card4 = {
    title: 'Gifs',
    description: 'Description for Card 4',
    link: '/app-gifs',
    buttonText: 'Button Text for Card 4'
  };

  card5 = {
    title: 'Tasks',
    description: 'Description for Card 5',
    link: '/app-tasks',
    buttonText: 'Button Text for Card 5'
  };

  card6 = {
    title: 'Weather',
    description: 'Description for Card 6',
    link: '/app-weater',
    buttonText: 'Button Text for Card 6'
  };

  constructor() { }

  ngOnInit() {
  }

}
