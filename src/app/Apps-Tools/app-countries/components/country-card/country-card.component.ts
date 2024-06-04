import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  @Input() country!: Country;

  getLanguages(languages: { [key: string]: { iso639_1: string, iso639_2: string, name: string, nativeName: string } }): string {
    return Object.values(languages).map(lang => lang.name).join(', ');
  }

  getCurrencies(currencies: { [key: string]: { name: string, symbol: string } }): string {
    return Object.values(currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ');
  }

  getBorders(borders: string[]): string {
    return borders.join(', ');
  }
}
