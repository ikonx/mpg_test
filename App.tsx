import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Navigation } from "./src/components/Templates/Navigation/Navigation";
import { MainContextProvider } from "./src/context/MainContext/MainContext";

export default function App() {
  return (
    <NavigationContainer>
      <MainContextProvider>
        <Navigation />
      </MainContextProvider>
    </NavigationContainer>
  );
}
