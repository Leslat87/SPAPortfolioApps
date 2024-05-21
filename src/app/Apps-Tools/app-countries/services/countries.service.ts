import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = 'https://restcountries.com/v3.1';
  private fields: string = 'fields=name,flags,cca3,capital,population,region,subregion,languages,currencies,borders';

  // Obtener todos los países
  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/all?${this.fields}`);
  }

   // Obtener país por código alpha
   getCountryByAlpha(code: string): Observable<Country> {
    return this.http.get<Country>(`${this.baseUrl}/alpha/${code}?${this.fields}`);
  }

  // Obtener países por nombre
  getCountryByName(name: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/name/${name}?${this.fields}`);
  }

  // Obtener países por capital
  getCountryByCapital(capital: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/capital/${capital}?${this.fields}`);
  }

  // Obtener países por región
  getCountryByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseUrl}/region/${region}?${this.fields}`);
  }

  getLanguages(languages: { [key: string]: string }): string {
    return Object.values(languages).join(', ');
  }

  getCurrencies(currencies: { [key: string]: { name: string, symbol: string } }): string {
    return Object.values(currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ');
  }

  getBorders(borders?: string[]): string {
    return borders ? borders.join(', ') : 'No tiene fronteras';
  }
}
