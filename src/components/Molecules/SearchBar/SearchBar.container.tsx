import React from "react";
import { TextInputProps } from "react-native";
import { SearchBarComponent } from "./SearchBar.component";

interface Props {}

export const SearchBar = (props: TextInputProps) => {
  return <SearchBarComponent {...props} />;
};
