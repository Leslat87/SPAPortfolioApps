import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

  constructor(private http: HttpClient) { }

<<<<<<< Updated upstream
  public cacheStore: CacheStore = {
    byCapital: {term: '', countries: [] },
    byCountries: {term: '', countries: [] },
    byRegion: {region: '', countries: [] },
  }

  constructor(private http: HttpClient ) {


  }

  private saveToLocalStorage(){
    localStorage.setItem('cacheStore', JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage(){
    if (! localStorage.getItem('cacheStore')) return;

    this.cacheStore = JSON.parse(localStorage.getItem('cacheStore')!);
  }

  private getCountryRequest(url: string): Observable<Country[]> {
      return this.http.get<Country[]>(url)
      .pipe(
        catchError( () => of([]) ),
        // delay(2000),
      );
  }

  searchCountryByAlphaCode( code: string ): Observable<Country | null> {

    const url = `${ this.apiUrl }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        map( countries => countries.length > 0 ? countries[0]: null ),
        catchError( () => of(null) )
      );
  }


  searchCapital( term: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.getCountryRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCapital = { term, countries}),
      tap( ()=> this.saveToLocalStorage() ),
    );
  }

  searchCountry( term: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${ term }`;
    return this.getCountryRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byCountries = { term, countries}),
      tap( ()=> this.saveToLocalStorage() ),
    );
  }

  searchRegion( region: Region ): Observable<Country[]> {

    const url = `${ this.apiUrl }/region/${ region }`;
    return this.getCountryRequest(url)
    .pipe(
      tap( countries => this.cacheStore.byRegion = { region, countries}),
      tap( ()=> this.saveToLocalStorage() ),
    );
  }
  }




=======
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
>>>>>>> Stashed changes
