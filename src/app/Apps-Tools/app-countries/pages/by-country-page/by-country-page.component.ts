import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.scss']
})
export class ByCountryPageComponent {
  term: string = '';
  countries: Country[] = [];
  error: boolean = false;

  constructor(private countriesService: CountriesService) {}

  search(term: string) {
    this.error = false;
    this.term = term;

    this.countriesService.searchCountry(this.term)
      .subscribe({
        next: (countries) => {
          this.countries = countries;
        },
        error: () => {
          this.error = true;
          this.countries = [];
        }
      });
  }
}

