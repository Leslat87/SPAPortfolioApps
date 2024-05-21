import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {
  @Input() country!: Country;

  constructor(
    private router: Router // Añadir el Router aquí
  ) {}

  getLanguages(languages: { [key: string]: string }): string {
    return Object.values(languages).join(', ');
  }

  getCurrencies(currencies: { [key: string]: { name: string; symbol: string } }): string {
    return Object.values(currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ');
  }

  getBorders(borders?: string[]): string {
    return borders ? borders.join(', ') : 'None';
  }

  // Método para navegar a la página de detalles del país
  navigateToCountryDetail() {
    this.router.navigate(['/country', this.country.cca3]);
  }
}
