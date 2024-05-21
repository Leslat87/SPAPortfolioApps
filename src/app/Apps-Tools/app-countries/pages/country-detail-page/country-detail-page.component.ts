import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-detail-page',
  templateUrl: './country-detail-page.component.html',
  styleUrls: ['./country-detail-page.component.scss']
})
export class CountryDetailPageComponent implements OnInit {
  public country$ = this.activatedRoute.params.pipe(
    switchMap(({ id }) => this.countriesService.getCountryByAlpha(id).pipe(
      catchError(error => {
        console.error('Error fetching country details:', error);
        this.router.navigateByUrl('/');
        return of(null);
      })
    )),
    tap(country => {
      if (!country) {
        this.router.navigateByUrl('/');
      }
    })
  );

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService,
  ) {}

  ngOnInit(): void {}
}
