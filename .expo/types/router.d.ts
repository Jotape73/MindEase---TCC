/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/pages/A` | `/pages/A2` | `/pages/A3` | `/pages/B` | `/pages/B2` | `/pages/B3` | `/pages/C` | `/pages/C2` | `/pages/C3` | `/pages/C4` | `/pages/Citacao` | `/pages/Entrar` | `/pages/HomeScreen` | `/pages/L1` | `/pages/L2` | `/pages/L3` | `/pages/LessonsScreen` | `/pages/LoginPage` | `/pages/MeuPerfil` | `/pages/Respirar` | `/pages/RespirarT`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
