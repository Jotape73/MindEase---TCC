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
import B from "./pages/B";
import C from "./pages/C";
import A2 from "./pages/A2";
import B2 from "./pages/B2";
import C2 from "./pages/C2";
import A3 from "./pages/A3";
import B3 from "./pages/B3";
import C3 from "./pages/C3";
import C4 from "./pages/C4";
import L2 from "./pages/L2";
import RespirarT from "./pages/RespirarT";
import Respirar from "./pages/Respirar";
import L3 from "./pages/L3";
import Citacao from "./pages/Citacao"

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
      <Stack.Navigator initialRouteName="LoginPage">
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
          name="B" 
          component={B}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen 
          name="C" 
          component={C}
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
          name="B2" 
          component={B2}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen 
          name="C2" 
          component={C2}
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
        <Stack.Screen 
          name="B3" 
          component={B3}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen 
          name="C3" 
          component={C3}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen 
          name="C4" 
          component={C4}
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
          name="RespirarT" 
          component={RespirarT}
          options={{
            headerShown: false,
            statusBarBackgroundColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
        <Stack.Screen 
          name="Respirar" 
          component={Respirar}
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
        <Stack.Screen 
          name="Citacao" 
          component={Citacao}
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
