import { Component, Input } from '@angular/core';
import { Country, Currencies, Languages } from '../../interfaces/country.interfaces';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.css']
})
export class CountryCardComponent {
  @Input() country!: Country;

  getLanguages(languages: Languages): string {
    return Object.values(languages).join(', ');
  }



  getCurrencies(currencies: Currencies): string {
    return Object.keys(currencies).map(key => {
      const currency = currencies[key as keyof Currencies];
      return currency ? currency.name : '';
    }).join(', ');
  }




  getBorders(borders: string[]): string {
    return borders.join(', ');
  }
}
