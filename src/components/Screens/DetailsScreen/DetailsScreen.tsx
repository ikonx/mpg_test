import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  ActivityIndicator,
  Button,
  Platform,
  ScrollView,
  Text,
  View,
} from "react-native";

import { Player } from "../../../hooks/useChampionship";
import { usePlayerDetails } from "../../../hooks/usePlayerDetails";
import { ULTRA_POSITION_HUMAIN_READABLE } from "../../../utils";
import Grid from "../../Atoms/Grid/Grid";
import Spacer from "../../Atoms/Space/Space";
import { StatsBlock } from "../../Molecules/StatsBlock/StatsBlock";
import {
  StatsTable,
  StatsTableField,
} from "../../Molecules/StatsTable/StatsTable";
import { DetailsScreenRouteProp } from "../../Templates/Navigation/Navigation";

import {
  StyledDetailsContains,
  StyledDetailsHeader,
  StyledHero,
  StyledTitle,
} from "./styles";

type Props = {
  route: DetailsScreenRouteProp;
};
export const DetailsScreen = ({ route }: Props) => {
  const { player: playerFromRoute }: { player: Player } = route.params;
  const { player, loading, error } = usePlayerDetails(playerFromRoute.id);
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  const effectiveData: StatsTableField[] = [
    {
      label: "Dribbles réussis par match",
      value: `${player?.stats.wonContestByMatch} (${player?.stats.percentageWonContest}%)`,
    },
    {
      label: "Duels remportés par match",
      value: `${player?.stats.wonDuelByMatch} (${player?.stats.percentageWonDuel}%)`,
    },
    {
      label: "Pertes de balle par match",
      value: player?.stats.lostBallByMatch,
    },
    {
      label: "Fautes commises par match",
      value: player?.stats.foulsByMatch,
    },
    {
      label: "Fautes subies par match",
      value: player?.stats.foulsEnduredByMatch,
    },
    {
      label: "Tirs cadrés par match",
      value: `${player?.stats.shotOnTargetByMatch} (${player?.stats.percentageShotOnTarget}%)`,
    },
  ];

  const goalsData: StatsTableField[] = [
    {
      label: "Buts (pén.)",
      value: `${player?.stats.sumGoals} (${player?.stats.sumPenalties})`,
    },
    {
      label: "Fréquence de buts (min.)",
      value: player?.stats.minutesByGoal,
    },
    {
      label: "Buts par match",
      value: player?.stats.goalByMatch,
    },
    {
      label: "Tirs par match",
      value: player?.stats.shotByMatch,
    },
    {
      label: "Grosses occasions ratées	",
      value: player?.stats.sumBigChanceMissed,
    },
  ];

  return (
    <>
      {Platform.OS === "ios" && (
        <View
          style={{
            width: "100%",
            height: 44,
            position: "absolute",
            top: 0,
            left: 0,
            backgroundColor: "#45c945",
          }}
        />
      )}
      <StyledDetailsContains edges={["top", "left", "right"]}>
        <StyledDetailsHeader>
          <Button title="Fermer" onPress={goBack} color="white" />
        </StyledDetailsHeader>
        <ScrollView>
          <StyledHero>
            {playerFromRoute.firstname && (
              <StyledTitle>{playerFromRoute.firstname}</StyledTitle>
            )}
            {playerFromRoute.lastname && (
              <StyledTitle>{playerFromRoute.lastname}</StyledTitle>
            )}
            <Spacer size={8} />
            <Text>
              {ULTRA_POSITION_HUMAIN_READABLE[playerFromRoute.ultraPosition]}
            </Text>
            <Text>{playerFromRoute.club}</Text>
            {loading && <ActivityIndicator />}
            {error && <Text>Erreur stats</Text>}
            {!error && player && (
              <>
                <Grid
                  style={{ padding: 8 }}
                  flexWrap="wrap"
                  justifyContent="space-between"
                >
                  <StatsBlock title="Note moy." value={player!.stats.avgRate} />
                  <StatsBlock
                    title="Buts (pén.)"
                    value={player!.stats.avgRate}
                  />
                  <StatsBlock title="Cote" value={player!.quotation} />
                  <StatsBlock
                    title="Passes dé."
                    value={player!.stats.sumGoalAssist}
                  />
                </Grid>
                <Grid
                  style={{ padding: 8 }}
                  flexWrap="wrap"
                  justifyContent="space-between"
                >
                  <StatsTable title="EFFICACE ?" fields={effectiveData} />
                  <Spacer size={24} />
                  <StatsTable title="IL PLANTE ?" fields={goalsData} />
                </Grid>
              </>
            )}
          </StyledHero>
        </ScrollView>
      </StyledDetailsContains>
    </>
  );
};
