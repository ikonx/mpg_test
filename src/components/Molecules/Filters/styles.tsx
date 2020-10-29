import { FunctionComponent } from "react";
import { Text, View } from "react-native";
import styled, { css } from "styled-components";
import Grid from "../../Atoms/Grid/Grid";

export const StyledFiltersContainer = styled<any>(Grid)`
  padding: 16px;
  flex-direction: column;
  background-color: #45c945;
  align-items: flex-start;
`;

export const StyledFilterItem = styled<
  FunctionComponent<{ isSelected?: boolean | null }>
>(Text)`
  padding: 4px 8px;
  border-radius: 4px;
  overflow: hidden;
  background-color: transparent;
  color: white;
  
  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: white;
      color: #45c945;
    `}
`;
