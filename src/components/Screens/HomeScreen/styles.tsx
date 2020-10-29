import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import Grid from "../../Atoms/Grid/Grid";

export const StyledHomeScreen = styled(SafeAreaView)``;
export const StyledListHeader = styled(Grid)`
  justify-content: space-between;
  width: 100%;
  background-color: #eee;
  padding-vertical: 8px;
  padding-horizontal: 16px;
`;
export const StyledListHeaderLabel = styled(Text)`
  color: #959daf;
  font-weight: bold;
`;
export const StyledListItem = styled(Grid)`
  justify-content: space-between;
  width: 100%;
  padding-horizontal: 8px;
`;

export const StyledListItemLabel = styled(Text)`
  justify-content: space-between;
  width: 100%;
`;
