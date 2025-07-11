import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import '../global.css'

import { useColorScheme } from '@/hooks/useColorScheme';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {useThemeColor} from "@/hooks/useThemeColor";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {allRoutes} from "@/constants/Routes";

export default function RootLayout() {

  const backgroundColor = useThemeColor({},'background');

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {

    return null;
  }

  return (
      <GestureHandlerRootView style={{backgroundColor: backgroundColor, flex: 1}}>
        <SafeAreaProvider>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>

            <Stack screenOptions={{
              headerShadowVisible: false,
              contentStyle: {
                backgroundColor: backgroundColor,

            }, headerStyle: {
                backgroundColor: backgroundColor,
              }}}>
              <Stack.Screen
              name='index'
              options={{
                title: 'Home',
              }}
              />

              {allRoutes.map(route => (
                  <Stack.Screen
                  key={route.name}
                  name={route.name}
                  options={{
                    title: route.title
                  }}/>

              ))}
            </Stack>

              <StatusBar style="auto" />
          </ThemeProvider>
        </SafeAreaProvider>

      </GestureHandlerRootView>

  );
}
