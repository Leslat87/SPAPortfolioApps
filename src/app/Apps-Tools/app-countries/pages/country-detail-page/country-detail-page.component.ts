import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-detail-page',
  templateUrl: './country-detail-page.component.html',
  styleUrls: ['./country-detail-page.component.css']
})
export class CountryDetailPageComponent implements OnInit {
  country: Country | null = null;

  constructor(private route: ActivatedRoute, private countriesService: CountriesService) { }

  ngOnInit(): void {
    const countryCode = this.route.snapshot.paramMap.get('countryCode');
    if (countryCode) {
      this.countriesService.searchCountryByAlphaCode(countryCode as string)
        .subscribe(country => {
          this.country = country;
        });
    }
  }
}
