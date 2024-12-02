/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/..\Backup\Menu` | `/..\Backup\ServicoPagamento` | `/..\Backup\_layout` | `/_sitemap` | `/pages/Entrar` | `/pages/HomeScreen` | `/pages/LessonsScreen` | `/pages/loginPage`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
