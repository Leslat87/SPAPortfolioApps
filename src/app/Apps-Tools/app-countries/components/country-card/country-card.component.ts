import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interfaces';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent {
  @Input() country!: Country;

  getLanguages(languages: { [key: string]: string } | undefined): string {
    return languages ? Object.values(languages).join(', ') : 'N/A';
  }

  getCurrencies(currencies: { [key: string]: { name: string; symbol: string } } | undefined): string {
    return currencies ? Object.values(currencies).map(currency => `${currency.name} (${currency.symbol})`).join(', ') : 'N/A';
  }

  getBorders(borders?: string[]): string {
    return borders ? borders.join(', ') : 'N/A';
  }
}
