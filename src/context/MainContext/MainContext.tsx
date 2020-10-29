import React, { createContext, ReactNode } from "react";
import { Text } from "react-native";
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
  const { players, loading } = useChampionship(1);

  return (
    <ChampionshipContext.Provider value={{ players, loading }}>
      {loading ? <Text>loader</Text> : props.children}
    </ChampionshipContext.Provider>
  );
};
