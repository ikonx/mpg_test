import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components";
import Grid from "../../Atoms/Grid/Grid";

export const StyledDetailsContains = styled(SafeAreaView)`
  flex: 1;
`;

export const StyledDetailsHeader = styled(Grid)`
  background-color: #45c945;
`;

export const StyledHero = styled(Grid)`
  flex-direction: column;
  padding: 16px;
`;

export const StyledTitle = styled(Text)`
  font-size: 22px;
  font-weight: bold;
`;
