import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './pages/LoginPage';
import Entrar from './pages/Entrar';
import HomeScreen from './pages/HomeScreen';
import LessonsScreen from "./pages/LessonsScreen";
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import L1 from "./pages/L1";
import A from "./pages/A";
import A2 from "./pages/A2";
import A3 from "./pages/A3";

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
          name="A" 
          component={A}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
       <Stack.Screen 
          name="A2" 
          component={A2}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen 
          name="A3" 
          component={A3}
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
