import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginPage from './pages/loginPage';
import Entrar from './pages/Entrar';
import HomeScreen from './pages/HomeScreen';
import LessonsScreen from "./pages/LessonsScreen";
import { NavigationContainer, NavigationIndependentTree } from '@react-navigation/native';

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

  function NestedNavigator() {
    return (
      <NavigationIndependentTree>
        <NavigationContainer>
        <Stack.Navigator initialRouteName="loginPage">
      <Stack.Screen 
          name="Login" 
          component={loginPage}
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
      </Stack.Navigator>
    </NavigationContainer>
    </NavigationIndependentTree>
   );
}
}