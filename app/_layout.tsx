import { useEffect } from 'react';

import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';

import 'react-native-reanimated';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';
import { allRoutes } from '@/constants/Routes';

import '../global.css';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {ThemeChangerProvider} from "@/Presentation/context/ThemeChangerContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const backgroundColor = useThemeColor({}, 'background');
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
      <SafeAreaProvider>
          <GestureHandlerRootView
              style={{ backgroundColor: backgroundColor, flex: 1 }}
          >

              <ThemeChangerProvider>
                  <Stack
                      screenOptions={{
                          headerShadowVisible: false,
                          contentStyle: {
                              backgroundColor: backgroundColor,
                          },
                          headerStyle: {
                              backgroundColor: backgroundColor,
                          },
                      }}
                  >
                      <Stack.Screen
                          name="index"
                          options={{
                              title: 'Home',
                          }}
                      />

                      {allRoutes.map((route) => (
                          <Stack.Screen
                              key={route.name}
                              name={route.name}
                              options={{
                                  title: route.title,
                                  headerShown: !route.title.includes('Slide'),
                              }}
                          />
                      ))}
                  </Stack>
              </ThemeChangerProvider>

          </GestureHandlerRootView>
      </SafeAreaProvider>

  );
}