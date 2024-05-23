import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interfaces';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-detail-page',
  templateUrl: './country-detail-page.component.html',
  styleUrls: ['./country-detail-page.component.css']
})
export class CountryDetailPageComponent implements OnInit {

  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countriesService.searchCountryByAlphaCode( id )),
      )
      .subscribe( country => {
        if ( !country ) return this.router.navigateByUrl('');
        return this.country = country;
      });
  }




}
