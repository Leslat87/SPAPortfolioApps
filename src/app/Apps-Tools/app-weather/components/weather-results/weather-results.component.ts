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
  weeklyForecast: any[] = [];  // Añadimos la definición de weeklyForecast
  recommendation: { text: string, imageUrl: string, backgroundImageUrl: string } = {
    text: 'No recommendation available.',
    imageUrl: 'assets/default-image.png',
    backgroundImageUrl: 'assets/default-bg.jpg'
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
    const dates = this.forecast.list.filter((entry: any, index: number) => index % 8 === 0).slice(0, 5).map((entry: any) => new Date(entry.dt * 1000).toLocaleDateString());
    const temperatures = this.forecast.list.filter((entry: any, index: number) => index % 8 === 0).slice(0, 5).map((entry: any) => entry.main.temp);

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
    this.weeklyForecast = this.forecast.list.filter((entry: any, index: number) => index % 8 === 0).slice(0, 5).map((data: any) => ({
      name: new Date(data.dt * 1000).toLocaleDateString('default', { weekday: 'short', month: 'short', day: 'numeric' }),
      temp: {
        day: data.main.temp,
        night: data.main.temp_min
      },
      weather: data.weather
    }));
  }

  getBackgroundImage() {
    const weatherDescription = this.weather.weather[0].description.toLowerCase();

    switch (true) {
      case weatherDescription.includes('clear') || weatherDescription.includes('few clouds') || weatherDescription.includes('scattered clouds'):
        return 'url(assets/typeofday/soleado.jpg)';
      case weatherDescription.includes('broken clouds') || weatherDescription.includes('overcast clouds'):
        return 'url(assets/typeofday/cloud.jpg)';
      case weatherDescription.includes('rain') || weatherDescription.includes('shower rain') || weatherDescription.includes('thunderstorm'):
        return 'url(assets/typeofday/rainy.jpg)';
      case weatherDescription.includes('snow') || weatherDescription.includes('light snow') || weatherDescription.includes('heavy snow'):
        return 'url(assets/typeofday/snow.jpg)';
      default:
        return 'url(assets/typeofday/extreme.jpg)';
    }
  }

  setRecommendation() {
    const weatherDescription = this.weather.weather[0].description.toLowerCase();

    switch (true) {
      case weatherDescription.includes('clear') || weatherDescription.includes('few clouds') || weatherDescription.includes('scattered clouds'):
        this.recommendation = {
          text: 'It\'s a beautiful day! Why not go for a walk or have a picnic?',
          imageUrl: 'assets/recommendations/buenclima.jpg',
          backgroundImageUrl: 'assets/typeofday/soleado.jpg'
        };
        break;
      case weatherDescription.includes('broken clouds') || weatherDescription.includes('overcast clouds'):
        this.recommendation = {
          text: 'It\'s a bit cloudy today. How about visiting a museum or going to the movies?',
          imageUrl: 'assets/recommendations/museum.png.jpg',
          backgroundImageUrl: 'assets/typeofday/cloud.jpg'
        };
        break;
      case weatherDescription.includes('rain') || weatherDescription.includes('shower rain') || weatherDescription.includes('thunderstorm'):
        this.recommendation = {
          text: 'It\'s raining outside. Why not stay indoors and read a book or play a game?',
          imageUrl: 'assets/recommendations/juegosmesa.png',
          backgroundImageUrl: 'assets/typeofday/rainy.jpg'
        };
        break;
      case weatherDescription.includes('snow') || weatherDescription.includes('light snow') || weatherDescription.includes('heavy snow'):
        this.recommendation = {
          text: 'It\'s snowing! How about building a snowman or going skiing?',
          imageUrl: 'assets/recommendations/urbalchill.jpg',
          backgroundImageUrl: 'assets/typeofday/snow.jpg'
        };
        break;
      default:
        this.recommendation = {
          text: 'Be careful out there! The weather is extreme.',
          imageUrl: 'assets/recommendations/becarefull.png',
          backgroundImageUrl: 'assets/typeofday/extreme.jpg'
        };
        break;
    }
  }
}
