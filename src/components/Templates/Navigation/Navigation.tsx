import React from "react";
import {
  createStackNavigator,
} from "@react-navigation/stack";

import { HomeScreen } from "../../Screens/HomeScreen/HomeScreen";
import { DetailsScreen } from "../../Screens/DetailsScreen/DetailsScreen";
import { NAVIGATION_SCREENS } from "../../../utils";
import { Player } from "../../../hooks/useChampionship";
import { RouteProp } from "@react-navigation/native";

interface Props {}

export type StackParamList = {
  [NAVIGATION_SCREENS.HOME]: undefined;
  [NAVIGATION_SCREENS.DETAILS]: { player: Player };
};

export type DetailsScreenRouteProp = RouteProp<
  StackParamList,
  NAVIGATION_SCREENS.DETAILS
>;

const Stack = createStackNavigator<StackParamList>();

export const Navigation = (props: Props) => {
  return (
    <Stack.Navigator
      mode="modal"
      headerMode="none"
      screenOptions={{
        gestureEnabled: true,
        cardOverlayEnabled: true,
      }}
      initialRouteName={NAVIGATION_SCREENS.HOME}
    >
      <Stack.Screen name={NAVIGATION_SCREENS.HOME} component={HomeScreen} />
      <Stack.Screen
        name={NAVIGATION_SCREENS.DETAILS}
        component={DetailsScreen}
      />
    </Stack.Navigator>
  );
};
