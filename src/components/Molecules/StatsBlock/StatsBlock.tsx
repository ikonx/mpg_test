import React from "react";
import { StyledStatsBlock, StyledStatsTitle, StyledStatsValue } from "./styles";

interface Props {
  title: string;
  value: string | number;
}

export const StatsBlock = ({ title, value }: Props) => {
  return (
    <StyledStatsBlock>
      <StyledStatsTitle>{title}</StyledStatsTitle>
      <StyledStatsValue>{value}</StyledStatsValue>
    </StyledStatsBlock>
  );
};
