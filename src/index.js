import "react-native-gesture-handler";

import React from "react";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import Routes from "./routes";
import { AuthProvider } from "./contexts/auth";

import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  useFonts,
} from "@expo-google-fonts/poppins";

export default function Home() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
}
