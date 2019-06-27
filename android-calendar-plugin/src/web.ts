import { WebPlugin } from '@capacitor/core';
import { AndroidCalendarPluginPlugin } from './definitions';

export class AndroidCalendarPluginWeb extends WebPlugin implements AndroidCalendarPluginPlugin {
  constructor() {
    super({
      name: 'AndroidCalendarPlugin',
      platforms: ['web']
    });
  }

  async echo(options: { value: string }): Promise<{value: string}> {
    console.log('ECHO', options);
    return options;
  }
}

const AndroidCalendarPlugin = new AndroidCalendarPluginWeb();

export { AndroidCalendarPlugin };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(AndroidCalendarPlugin);
