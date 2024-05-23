import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {

  @Input() 
  public countries: Country[] = [];

  constructor(private router: Router) {}

  navigateToCountryDetail(cca3: string) {
    this.router.navigate(['/country/', cca3]);
  }
}
