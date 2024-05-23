
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-results',
  templateUrl: './weather-results.component.html',
  styleUrls: ['./weather-results.component.css']
})
export class WeatherResultsComponent implements OnInit {
  @Input() weather: any;
  @Input() forecast: any;
  @Input() chartData: any;
  currentDate: string = '';
  currentTime: string = '';
  hourlyChartOptions: any;
  dailyChartOptions: any;
  weeklyForecast: any[] = [];
  recommendation: { text: string, imageUrl: string } = {
    text: 'No recommendation available.',
    imageUrl: 'assets/default-image.png'
  };

  ngOnInit(): void {
    if (this.weather && this.forecast && this.chartData) {
      this.setDateTime();
      this.setHourlyChartOptions();
      this.setDailyChartOptions();
      this.setWeeklyForecast();
      this.setRecommendation();
    }
  }

  setDateTime() {
    const now = new Date();
    this.currentDate = now.toLocaleDateString('default', { weekday: 'long', month: 'long', day: 'numeric' });
    this.currentTime = now.toLocaleTimeString('default', { hour: '2-digit', minute: '2-digit' });
  }

  setHourlyChartOptions() {
    const dates = this.chartData.slice(0, 8).map((entry: any) => new Date(entry.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    const temperatures = this.chartData.slice(0, 8).map((entry: any) => entry.main.temp);

    this.hourlyChartOptions = {
      xAxis: {
        type: 'category',
        data: dates
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: temperatures,
        type: 'line',
        smooth: true
      }]
    };
  }

  setDailyChartOptions() {
    const dates = this.forecast.map((entry: any) => new Date(entry.dt * 1000).toLocaleDateString());
    const temperatures = this.forecast.map((entry: any) => entry.temp.day);

    this.dailyChartOptions = {
      xAxis: {
        type: 'category',
        data: dates
      },
      yAxis: {
        type: 'value'
      },
      series: [{
        data: temperatures,
        type: 'line',
        smooth: true
      }]
    };
  }

  setWeeklyForecast() {
    this.weeklyForecast = this.forecast.map((data: any) => ({
      name: new Date(data.dt * 1000).toLocaleDateString('default', { weekday: 'short', month: 'short', day: 'numeric' }),
      temp: {
        day: data.temp.day,
        night: data.temp.night
      },
      weather: data.weather
    }));
  }

  getBackgroundImage() {
    const weatherDescription = this.weather.weather[0].description.toLowerCase();

    switch (true) {
      case weatherDescription.includes('clear') || weatherDescription.includes('few clouds') || weatherDescription.includes('scattered clouds'):
        return 'url(assets/soleado.jpg)';
      case weatherDescription.includes('broken clouds') || weatherDescription.includes('overcast clouds'):
        return 'url(assets/cloud.jpg)';
      case weatherDescription.includes('rain') || weatherDescription.includes('shower rain') || weatherDescription.includes('thunderstorm'):
        return 'url(assets/rainy.jpg)';
      case weatherDescription.includes('snow') || weatherDescription.includes('light snow') || weatherDescription.includes('heavy snow'):
        return 'url(assets/snow.jpg)';
      default:
        return 'url(assets/extreme.jpg)';
    }
  }

  setRecommendation() {
    const weatherDescription = this.weather.weather[0].description.toLowerCase();

    switch (true) {
      case weatherDescription.includes('clear') || weatherDescription.includes('few clouds') || weatherDescription.includes('scattered clouds'):
        this.recommendation = {
          text: 'It\'s a beautiful day! Why not go for a walk or have a picnic?',
          imageUrl: 'assets/recommendations/sunny-day.jpg'
        };
        break;
      case weatherDescription.includes('broken clouds') || weatherDescription.includes('overcast clouds'):
        this.recommendation = {
          text: 'It\'s a bit cloudy today. How about visiting a museum or going to the movies?',
          imageUrl: 'assets/recommendations/cloudy-day.jpg'
        };
        break;
      case weatherDescription.includes('rain') || weatherDescription.includes('shower rain') || weatherDescription.includes('thunderstorm'):
        this.recommendation = {
          text: 'It\'s raining outside. Why not stay indoors and read a book or play a game?',
          imageUrl: 'assets/recommendations/rainy-day.jpg'
        };
        break;
      case weatherDescription.includes('snow') || weatherDescription.includes('light snow') || weatherDescription.includes('heavy snow'):
        this.recommendation = {
          text: 'It\'s snowing! How about building a snowman or going skiing?',
          imageUrl: 'assets/recommendations/snowy-day.jpg'
        };
        break;
      default:
        this.recommendation = {
          text: 'Be careful out there! The weather is extreme.',
          imageUrl: 'assets/recommendations/extreme-weather.jpg'
        };
        break;
    }
  }
}
