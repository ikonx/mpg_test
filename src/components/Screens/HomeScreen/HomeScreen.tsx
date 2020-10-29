import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useRef, useState } from "react";
import { FlatList, Platform, SafeAreaView, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Grid from "../../Atoms/Grid/Grid";
import { Filters } from "../../Molecules/Filters/Filters.container";

import { Player, useChampionship } from "../../../hooks/useChampionship";
import {
  NAVIGATION_SCREENS,
  ULTRA_POSITION,
  ULTRA_POSITION_HUMAIN_READABLE,
} from "../../../utils";

import {
  StyledHomeScreen,
  StyledListHeader,
  StyledListHeaderLabel,
  StyledListItem,
  StyledListItemLabel,
} from "./styles";

interface Props {}

export const HomeScreen = (props: Props) => {
  const navigation = useNavigation();
  const { players: defaultPlayers, loading } = useChampionship(1);
  const [players, setPlayers] = useState<Player[]>([]);
  const [filters, setFilters] = useState<{
    name: string | null;
    ultraPosition: ULTRA_POSITION | null;
  }>({ name: null, ultraPosition: null });
  const flatListRef = useRef(null);

  useEffect(() => {
    setPlayers(defaultPlayers);
  }, [defaultPlayers]);

  useEffect(() => {
    let newPlayers = [...defaultPlayers];

    if (filters.name) {
      newPlayers = newPlayers.filter(
        (player) =>
          (player.firstname &&
            player.firstname
              .toLowerCase()
              .includes(filters.name!.toLowerCase())) ||
          (player.lastname &&
            player.lastname.toLowerCase().includes(filters.name!.toLowerCase()))
      );
    }

    if (filters.ultraPosition) {
      newPlayers = newPlayers.filter(
        (player) => player.ultraPosition === filters.ultraPosition
      );
    }

    flatListRef?.current?.scrollToOffset({ animated: false, offset: 0 });
    setPlayers(newPlayers);
  }, [filters]);

  const filter = (
    value: ULTRA_POSITION | string | null,
    type: "name" | "position"
  ) => () => {
    if (type === "name") {
      setFilters({ ...filters, name: value });
    } else if (type === "position") {
      const newValue = filters.ultraPosition === value ? null : value;
      setFilters({ ...filters, ultraPosition: newValue });
    }
  };

  const goToPlayerDetails = (player: Player) =>
    navigation.navigate({
      params: { player },
      name: NAVIGATION_SCREENS.DETAILS,
    });

  return (
    <>
      <View
        style={{
          width: "100%",
          height: 100,
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#45c945",
        }}
      />
      <StatusBar style="light" />
      <StyledHomeScreen
        style={{
          flex: 1,
          paddingTop: Platform.OS === "android" ? 44 : 0,
        }}
      >
        <Filters
          title="Cherche ta chèvre"
          onFilter={filter}
          selectedFilter={filters.ultraPosition}
        />
        <Grid flexDirection="column" style={{ flex: 1 }}>
          {!loading && players.length > 0 && (
            <>
              <StyledListHeader>
                <StyledListHeaderLabel style={{ flex: 1 }}>
                  Joueur
                </StyledListHeaderLabel>
                <StyledListHeaderLabel style={{ flex: 0.4 }}>
                  Position
                </StyledListHeaderLabel>
                <StyledListHeaderLabel style={{ flex: 0.3 }}>
                  Cote
                </StyledListHeaderLabel>
              </StyledListHeader>
              {
                <View style={{ flex: 1 }}>
                  <FlatList
                    ref={flatListRef}
                    data={players}
                    keyExtractor={(item: Player) => item.id}
                    scrollEventThrottle={16}
                    renderItem={({
                      item,
                      index,
                    }: {
                      item: Player;
                      index: number;
                    }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => goToPlayerDetails(item)}
                          style={{
                            width: "100%",
                            height: 44,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor:
                              index % 2 ? "#e9e9e9" : "transparent",
                          }}
                        >
                          <StyledListItem>
                            <StyledListItemLabel
                              style={{
                                flex: 1,
                                color: "#333",
                                fontWeight: "bold",
                              }}
                            >
                              {item.firstname} {item.lastname ?? item.lastname}
                            </StyledListItemLabel>
                            <StyledListItemLabel style={{ flex: 0.4 }}>
                              {
                                ULTRA_POSITION_HUMAIN_READABLE[
                                  item.ultraPosition
                                ]
                              }
                            </StyledListItemLabel>
                            <StyledListItemLabel style={{ flex: 0.3 }}>
                              {item.stats.avgRate}
                            </StyledListItemLabel>
                          </StyledListItem>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              }
            </>
          )}
        </Grid>
      </StyledHomeScreen>
    </>
  );
};
