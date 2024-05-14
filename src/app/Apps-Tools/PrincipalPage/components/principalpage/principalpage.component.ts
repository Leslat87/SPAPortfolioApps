import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principalpage',
  templateUrl: './principalpage.component.html',
  styleUrls: ['./principalpage.component.css']
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

  // Definir los otros cuatro objetos para las tarjetas restantes
  card3 = {
    title: 'Title 3',
    description: 'Description for Card 3',
    link: '/route-to-card3',
    buttonText: 'Button Text for Card 3'
  };

  card4 = {
    title: 'Title 4',
    description: 'Description for Card 4',
    link: '/route-to-card4',
    buttonText: 'Button Text for Card 4'
  };

  card5 = {
    title: 'Title 5',
    description: 'Description for Card 5',
    link: '/route-to-card5',
    buttonText: 'Button Text for Card 5'
  };

  card6 = {
    title: 'Title 6',
    description: 'Description for Card 6',
    link: '/route-to-card6',
    buttonText: 'Button Text for Card 6'
  };

  constructor() { }

  ngOnInit() {
  }

}
