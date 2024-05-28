export interface Newweather {
  list: List[];
}

export interface List {
  dt: number;
  temp: {
    day: number;
    min: number;
    max: number;
    night: number;
    eve: number;
    morn: number;
  };
  weather: Weather[];
}

export interface Weather {
  description: string;
  icon: string;
}
