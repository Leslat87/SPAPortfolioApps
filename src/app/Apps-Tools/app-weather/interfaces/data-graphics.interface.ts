export interface Graphics {
  list: {
    dt: number;
    temp: number;
    weather: {
      icon: string;
      description: string;
    }[];
  }[];
}
