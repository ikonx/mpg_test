import React from "react";
import { Text } from "react-native";

import Spacer from "../../Atoms/Space/Space";
import { SearchBar } from "../SearchBar/SearchBar.container";

import { FilterProps, FiltersComponent } from "./Filters.component";
import { StyledFiltersContainer } from "./styles";

export const Filters = ({
  title,
  ...props
}: FilterProps & { title?: string }) => {
  return (
    <StyledFiltersContainer>
      {title && (
        <>
          <Text style={{ fontSize: 24, fontWeight: "bold", color: "white" }}>
            {title}
          </Text>
          <Spacer size={16} />
        </>
      )}
      <SearchBar
        clearButtonMode="always"
        onChangeText={(value: string) => {
          props.onFilter(value, "name")();
          console.log("value, ", value);
        }}
      />
      <Spacer size={16} />
      <FiltersComponent {...props} />
    </StyledFiltersContainer>
  );
};
