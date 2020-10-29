import React from "react";
import { TextInputProps } from "react-native";
import { StyledSearchBar } from "./styles";

export const SearchBarComponent = (props: TextInputProps) => {
  return <StyledSearchBar {...props} />;
};
