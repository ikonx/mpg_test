import { Text } from "react-native";
import styled from "styled-components";
import Grid from "../../Atoms/Grid/Grid";

export const StyledStatsBlock = styled(Grid)`
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  width: 50%;
`;

export const StyledStatsTitle = styled(Text)`
  font-size: 16px;
  color: #111;
`;

export const StyledStatsValue = styled(Text)`
  font-size: 22px;
  color: #111;
  font-weight: bold;
`;
