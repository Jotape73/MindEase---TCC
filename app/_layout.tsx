import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/loginPage';
import Entrar from './pages/Entrar';
import HomeScreen from './pages/HomeScreen';
import LessonsScreen from "./pages/LessonsScreen";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import L1 from "./pages/L1";
import L2 from "./pages/L2";
import L3 from "./pages/L3";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      // SplashScreen.hideAsync();
    }
  }, [loaded]);
  if (!loaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="L1">
      <Stack.Screen 
          name="LoginPage" 
          component={LoginPage}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
          />
      <Stack.Screen 
          name="Entrar" 
          component={Entrar}
          options={{
            title: 'Entrar',
            headerTitleStyle: {
            fontSize: 35,
            fontWeight: 'condensedBold',
            },
            headerTintColor: '#c990f9',
            headerTitleAlign: 'center',
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
          />
        <Stack.Screen 
          name="LessonsScreen" 
          component={LessonsScreen}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
          />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen 
          name="L1" 
          component={L1}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen 
          name="L2" 
          component={L2}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen 
          name="L3" 
          component={L3}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
   );
}
