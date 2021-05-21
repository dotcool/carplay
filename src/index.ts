import { registerPlugin } from '@capacitor/core';

import type { CarplayPlugin } from './definitions';

const Carplay = registerPlugin<CarplayPlugin>('Carplay', {
  web: () => import('./web').then(m => new m.CarplayWeb()),
});

export * from './definitions';
export { Carplay };
