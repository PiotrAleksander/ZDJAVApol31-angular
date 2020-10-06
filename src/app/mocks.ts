import { IBeer } from './types/index';

export const BEERS: IBeer[] = [
  {
    id: 192,
    name: 'Punk IPA 2007 - 2010',
    image_url: 'https://images.punkapi.com/v2/192.png',
    abv: 6.0,
    ibu: 60.0,
    target_fg: 1010.0,
    target_og: 1056.0,
    ebc: 17.0,
    srm: 8.5,
    ph: 4.4,
    attenuation_level: 82.14,
    volume: {
      value: 20,
      unit: 'liters',
    },
  },
  {
    id: 193,
    name: 'Punk APA',
    abv: 7.0,
    ibu: 61.0,
    target_fg: 123.0,
    target_og: 3332.0,
    ebc: 12.0,
    srm: 8.4,
    ph: 4.3,
    attenuation_level: 82.14,
    volume: {
      value: 20,
      unit: 'liters',
    },
  },
];
