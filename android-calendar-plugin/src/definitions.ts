declare module "@capacitor/core" {
  interface PluginRegistry {
    AndroidCalendarPlugin: AndroidCalendarPluginPlugin;
  }
}

export interface AndroidCalendarPluginPlugin {
  echo(options: { value: string }): Promise<{value: string}>;
}
