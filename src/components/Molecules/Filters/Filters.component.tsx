import React from "react";
import { Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ULTRA_POSITION, ULTRA_POSITION_HUMAIN_READABLE } from "../../../utils";
import Grid from "../../Atoms/Grid/Grid";
import Spacer from "../../Atoms/Space/Space";
import { StyledFilterItem } from "./styles";

export interface FilterProps {
  onFilter: (
    value: ULTRA_POSITION | string | null,
    type: "position" | "name"
  ) => () => void;
  selectedFilter: ULTRA_POSITION | null;
}

export const FiltersComponent = ({ onFilter, selectedFilter }: FilterProps) => {
  return (
    <Grid flexDirection="column" alignItems="flex-start">
      <Text style={{ fontSize: 16, fontWeight: "bold", color: "white" }}>
        Position :{" "}
      </Text>
      <Spacer size={8} />
      <Grid
        justifyContent="flex-start"
        style={{ width: "100%" }}
        flexWrap="wrap"
      >
        <TouchableOpacity
          onPress={onFilter(ULTRA_POSITION.GOAL_KEEPER, "position")}
          style={{ width: "100%" }}
        >
          <StyledFilterItem
            isSelected={selectedFilter === ULTRA_POSITION.GOAL_KEEPER}
          >
            {ULTRA_POSITION_HUMAIN_READABLE[ULTRA_POSITION.GOAL_KEEPER]}
          </StyledFilterItem>
        </TouchableOpacity>
        <Spacer size={4} />
        <TouchableOpacity
          onPress={onFilter(ULTRA_POSITION.DEFENDER, "position")}
          style={{ width: "100%" }}
        >
          <StyledFilterItem
            isSelected={selectedFilter === ULTRA_POSITION.DEFENDER}
          >
            {ULTRA_POSITION_HUMAIN_READABLE[ULTRA_POSITION.DEFENDER]}
          </StyledFilterItem>
        </TouchableOpacity>
        <Spacer size={4} />
        <TouchableOpacity
          onPress={onFilter(ULTRA_POSITION.WINGER, "position")}
          style={{ width: "100%" }}
        >
          <StyledFilterItem
            isSelected={selectedFilter === ULTRA_POSITION.WINGER}
          >
            {ULTRA_POSITION_HUMAIN_READABLE[ULTRA_POSITION.WINGER]}
          </StyledFilterItem>
        </TouchableOpacity>
        <Spacer size={4} />
        <TouchableOpacity
          onPress={onFilter(ULTRA_POSITION.DEFENSIVE_MIDFIELDER, "position")}
          style={{ width: "100%" }}
        >
          <StyledFilterItem
            isSelected={selectedFilter === ULTRA_POSITION.DEFENSIVE_MIDFIELDER}
          >
            {
              ULTRA_POSITION_HUMAIN_READABLE[
                ULTRA_POSITION.DEFENSIVE_MIDFIELDER
              ]
            }
          </StyledFilterItem>
        </TouchableOpacity>
        <Spacer size={4} />
        <TouchableOpacity
          onPress={onFilter(ULTRA_POSITION.OFFENSIVE_MIDFIELDER, "position")}
          style={{ width: "100%" }}
        >
          <StyledFilterItem
            isSelected={selectedFilter === ULTRA_POSITION.OFFENSIVE_MIDFIELDER}
          >
            {
              ULTRA_POSITION_HUMAIN_READABLE[
                ULTRA_POSITION.OFFENSIVE_MIDFIELDER
              ]
            }
          </StyledFilterItem>
        </TouchableOpacity>
        <Spacer size={4} />
        <TouchableOpacity
          onPress={onFilter(ULTRA_POSITION.FORWARD, "position")}
          style={{ width: "100%" }}
        >
          <StyledFilterItem
            isSelected={selectedFilter === ULTRA_POSITION.FORWARD}
          >
            {ULTRA_POSITION_HUMAIN_READABLE[ULTRA_POSITION.FORWARD]}
          </StyledFilterItem>
        </TouchableOpacity>
      </Grid>
    </Grid>
  );
};
