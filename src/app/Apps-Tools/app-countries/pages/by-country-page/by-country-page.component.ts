import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

<<<<<<< Updated upstream
  constructor( private countriesService: CountriesService ) {}

  ngOnInit() {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
=======
  search(term: string) {
    this.error = false;


    this.countriesService. getCountryByName(this.term)
      .subscribe({
        next: (countries) => {
          this.countries = countries.length ? countries : [];
        },
        error: () => {
          this.error = true;
          this.countries = [];
        }
      });
>>>>>>> Stashed changes
  }

  searchByCountry( term: string ):void  {

    this.isLoading = true;

    this.countriesService.searchCountry( term )
      .subscribe( countries => {
        this.countries = countries;
        this.isLoading = false;
      });

  }

}
