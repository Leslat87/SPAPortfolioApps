import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  constructor(private primengConfig: PrimeNGConfig) {}


  ngOnInit() {
    this.primengConfig.ripple = true;

  }

}
