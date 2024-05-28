import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styleUrls: ['./by-country-page.component.css']
})
export class ByCountryPageComponent implements OnInit, OnDestroy {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';
  private destroy$ = new Subject<void>();

  constructor(private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  searchByCountry(): void {
    const term = this.initialValue.trim();
    if (term === '') {
      this.countries = [];
      return;
    }
    this.isLoading = true;
    this.countriesService.searchCountry(term)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: countries => {
          this.countries = countries;
          this.isLoading = false;
        },
        error: () => {
          this.countries = [];
          this.isLoading = false;
        }
      });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}

