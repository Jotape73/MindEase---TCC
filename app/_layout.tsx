import { Stack } from "expo-router";
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginPage from './pages/loginPage';
import Entrar from './pages/Entrar';
import HomeScreen from './pages/HomeScreen';

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
    <Stack.Navigator initialRouteName="loginPage">
      <Stack.Screen 
          name="Login" 
          component={loginPage}
          options={{
            headerShown: false,
            statusBarColor: "#f5f5f5",
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
            statusBarColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
          />
        <Stack.Screen 
          name="HomeScreen" 
          component={HomeScreen}
          options={{
            headerShown: false,
            statusBarColor: "#f5f5f5",
            statusBarStyle: "dark",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}