// src/app/Apps-Tools/app-countries/pages/country-detail-page/country-detail-page.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-country-detail-page',
  templateUrl: './country-detail-page.component.html',
  styleUrls: ['./country-detail-page.component.scss']
})
export class CountryDetailPageComponent implements OnInit {
  country!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.countriesService.searchCountryByAlpha(id).subscribe(country => {
        this.country = country!;
      });
    });
  }
}
