import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styleUrls: ['./by-capital-page.component.css']
})
export class ByCapitalPageComponent implements OnInit, OnDestroy {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public initialValue: string = '';
  public errorMessage: string = '';
  private destroy$ = new Subject<void>();

  constructor(private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCapital.countries;
    this.initialValue = this.countriesService.cacheStore.byCapital.term;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  searchByCapital(): void {
    const term = this.initialValue.trim();
    if (term === '') {
      this.countries = [];
      return;
    }
    this.isLoading = true;
    this.countriesService.searchCapital(term)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: countries => {
          this.countries = countries;
          this.isLoading = false;
          this.errorMessage = '';
        },
        error: (err) => {
          this.countries = [];
          this.isLoading = false;
          this.errorMessage = 'An error occurred while fetching data';
        }
      });
  }

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }
}

