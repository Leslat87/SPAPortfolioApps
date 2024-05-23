// src/app/Apps-Tools/app-countries/pages/by-capital-page/by-capital-page.component.ts
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';

  constructor(private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {}

  searchByCapital(): void {
    const term = this.initialValue.trim();
    if (term === '') {
      this.countries = [];
      return;
    }
    this.isLoading = true;
    this.countriesService.searchCapital(term)
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
