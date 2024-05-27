import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  searchByCountry(): void {
    const term = this.initialValue.trim();
    if (term === '') {
      this.countries = [];
      return;
    }
    this.isLoading = true;
    this.countriesService.searchCountry(term)
      .subscribe(countries => {
        this.countries = countries;
        this.isLoading = false;
      }, () => {
        this.countries = [];
        this.isLoading = false;
      });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
