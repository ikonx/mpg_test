import { Text } from "react-native";
import styled from "styled-components";
import Grid from "../../Atoms/Grid/Grid";

export const StyledStatsTable = styled(Grid)`
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`;

export const StyledStatsTitle = styled(Text)`
  font-size: 16px;
  color: #4054cc;
`;

export const StyledStatsLabel = styled(Text)`
  font-size: 16px;
  color: #111;
  font-weight: 500;
`;

export const StyledStatsValue = styled(Text)`
  font-size: 16px;
  color: #111;
  font-weight: bold;
`;
