import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent {
  @Input() countries: Country[] = [];

  constructor(private router: Router) {}

  navigateToCountryDetail(alpha3Code: string) {
    this.router.navigate(['/countries', alpha3Code]);
  }
}
