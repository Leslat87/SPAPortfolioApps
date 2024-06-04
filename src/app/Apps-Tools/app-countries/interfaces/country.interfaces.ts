export enum Region {
  Africa   = 'Africa',
  Americas = 'Americas',
  Asia     = 'Asia',
  Europe   = 'Europe',
  Oceania  = 'Oceania',
}

export interface SmallCountry {
  name   : string;
  cca3   : string;
  borders: string[];
}
export interface Country {
  name: string;
  alpha2Code: string;
  alpha3Code: string;
  capital: string;
  region: string;
  subregion: string;
  population: number;
  demonym: string;
  area: number;
  gini: number;
  timezones: string[];
  borders: string[];
  nativeName: string;
  numericCode: string;
  currencies: { [key: string]: { code: string, name: string, symbol: string } };
  languages: { [key: string]: { iso639_1: string, iso639_2: string, name: string, nativeName: string } };
  translations: { [key: string]: string };
  flag: string;
  regionalBlocs: { acronym: string, name: string, otherAcronyms: string[], otherNames: string[] }[];
  cioc: string;
}
