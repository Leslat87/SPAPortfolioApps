import { Component, Input } from '@angular/core';
import { WeatherResponse } from '../../interfaces/weather.interface';

@Component({
  selector: 'weather-today',
  templateUrl: './weather-today.component.html',
  styleUrls: ['./weather-today.component.scss']
})
export class WeatherTodayComponent {
  @Input() weather!: WeatherResponse;

  getIconUrl(icon: string): string {
    return `http://openweathermap.org/img/wn/${icon}.png`;
  }

  getActivityRecommendation(description: string): string {
    if (description.includes('rain')) {
      return 'Lleva un paraguas y tal vez quédate en casa con una buena película.';
    } else if (description.includes('clear')) {
      return 'Es un buen día para una caminata o un picnic al aire libre.';
    } else if (description.includes('clouds')) {
      return 'Podría ser un buen día para visitar un museo o una galería de arte.';
    } else {
      return 'Disfruta el día a tu manera, pero ten en cuenta el clima.';
    }
  }
}
