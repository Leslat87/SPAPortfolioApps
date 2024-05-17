import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {
  @Input() country!: Country;

  constructor(private router: Router) {}

  navigateToCountryDetail() {
    this.router.navigate(['/country', this.country.cca2]);
  }
}
