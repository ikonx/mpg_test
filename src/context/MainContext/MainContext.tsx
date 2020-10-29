import React, { createContext, ReactNode } from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { useChampionship, Player } from "../../hooks/useChampionship";

interface Props {
  children: ReactNode;
}

interface ChampionshipContext {
  players: Player[];
  loading: boolean;
}
const ChampionshipContext = createContext<ChampionshipContext>({
  players: [],
  loading: false,
});

export const MainContextProvider = (props: Props) => {
  const { players, loading, error } = useChampionship(1);

  return (
    <ChampionshipContext.Provider value={{ players, loading }}>
      {error && (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Error lors du chargement des joueurs</Text>
        </View>
      )}
      {loading && !error ? <ActivityIndicator /> : props.children}
    </ChampionshipContext.Provider>
  );
};
