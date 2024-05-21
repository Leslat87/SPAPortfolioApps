import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Region } from '../../interfaces/region.types';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.scss']
})
export class ByRegionPageComponent implements OnInit {
  regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  countries: Country[] = [];
  error: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  search(region: Region): void {
    this.error = false;
    this.countriesService.getCountryByRegion(region).subscribe(
      countries => {
        this.countries = countries;
      },
      () => {
        this.error = true;
        this.countries = [];
      }
    );
  }
}
