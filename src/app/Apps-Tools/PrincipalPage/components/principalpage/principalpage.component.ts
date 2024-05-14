import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principalpage',
  templateUrl: './principalpage.component.html',
  styleUrls: ['./principalpage.component.css']
})
export class PrincipalPageComponent implements OnInit {

  cards = [
    { title: 'Card 1', content: 'Content of card 1' },
    { title: 'Card 2', content: 'Content of card 2' },
    { title: 'Card 3', content: 'Content of card 3' },
    { title: 'Card 4', content: 'Content of card 4' },
    { title: 'Card 5', content: 'Content of card 5' },
    { title: 'Card 6', content: 'Content of card 6' },
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
