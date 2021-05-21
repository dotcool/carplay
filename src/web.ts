import { WebPlugin } from '@capacitor/core';

import type { CarplayPlugin } from './definitions';

export class CarplayWeb extends WebPlugin implements CarplayPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
