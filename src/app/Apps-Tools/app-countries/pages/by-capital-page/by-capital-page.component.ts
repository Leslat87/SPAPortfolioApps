
import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.scss']
})
export class ByCapitalPageComponent implements OnInit {
  term: string = '';
  countries: Country[] = [];
  error: boolean = false;

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {}

  search(term: string): void {
    this.error = false;
    this.countriesService.searchCapital(term).subscribe(
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
