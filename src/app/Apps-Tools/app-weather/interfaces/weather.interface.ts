// src/app/Apps-Tools/app-weather/interfaces/weather.interface.ts
export interface WeatherResponse {
  weather: { description: string, icon: string }[];
  main: { temp: number, temp_min: number, temp_max: number };
  name: string;
  dt: number;
}

export interface ForecastResponse {
  list: {
    dt: number;
    temp: { min: number, max: number };
    weather: { description: string, icon: string }[];
  }[];
}
