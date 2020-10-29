import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React, { Ref, useEffect, useRef, useState } from "react";
import {
  FlatList,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Player, useChampionship } from "../../../hooks/useChampionship";
import {
  NAVIGATION_SCREENS,
  ULTRA_POSITION,
  ULTRA_POSITION_HUMAIN_READABLE,
} from "../../../utils";
import Grid from "../../Atoms/Grid/Grid";
import { Filters } from "../../Molecules/Filters/Filters.container";

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

    if (filters.name !== null) {
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
      {Platform.OS === "ios" && (
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
      )}
      <StatusBar style="light" />
      <SafeAreaView style={{ flex: 1 }}>
        <Filters
          title="Cherche ta chèvre"
          onFilter={filter}
          selectedFilter={filters.ultraPosition}
        />
        <Grid flexDirection="column" style={{ flex: 1 }}>
          {!loading && players.length > 0 && (
            <>
              <Grid
                justifyContent="space-between"
                style={{
                  width: "100%",
                  backgroundColor: "#f5f6f8",
                  paddingVertical: 8,
                  paddingHorizontal: 16,
                }}
              >
                <Text style={{ flex: 1, color: "#959daf", fontWeight: "bold" }}>
                  Joueur
                </Text>
                <Text
                  style={{ flex: 0.4, color: "#959daf", fontWeight: "bold" }}
                >
                  Position
                </Text>
                <Text
                  style={{ flex: 0.3, color: "#959daf", fontWeight: "bold" }}
                >
                  Cote
                </Text>
              </Grid>
              {
                <View style={{ flex: 1 }}>
                  <FlatList
                    ref={flatListRef}
                    data={players}
                    keyExtractor={(item: Player) => item.id}
                    scrollEventThrottle={16}
                    // decelerationRate="fast"
                    renderItem={({ item }: { item: Player }) => {
                      return (
                        <TouchableOpacity
                          onPress={() => goToPlayerDetails(item)}
                          style={{
                            width: "100%",
                            padding: 8,
                          }}
                        >
                          <Grid
                            justifyContent="space-between"
                            style={{ width: "100%", paddingHorizontal: 8 }}
                          >
                            <Text
                              style={{
                                flex: 1,
                                color: "#333",
                                fontWeight: "bold",
                              }}
                            >
                              {item.firstname} {item.lastname ?? item.lastname}
                            </Text>
                            <Text style={{ flex: 0.4 }}>
                              {
                                ULTRA_POSITION_HUMAIN_READABLE[
                                  item.ultraPosition
                                ]
                              }
                            </Text>
                            <Text style={{ flex: 0.3 }}>
                              {item.stats.avgRate}
                            </Text>
                          </Grid>
                        </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              }
            </>
          )}
        </Grid>
      </SafeAreaView>
    </>
  );
};
