import { Component, OnInit, OnDestroy } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interfaces';
import { Router } from '@angular/router';
import { Region } from '../../interfaces/region.types';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styleUrls: ['./by-region-page.component.css']
})
export class ByRegionPageComponent implements OnInit, OnDestroy {

  public countries: Country[] = [];
  public isLoading: boolean = false;
  public regions: Region[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  private destroy$ = new Subject<void>();

  constructor(private countriesService: CountriesService, private router: Router) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  searchByRegion(region: Region): void {
    this.isLoading = true;
    this.countriesService.searchRegion(region)
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
