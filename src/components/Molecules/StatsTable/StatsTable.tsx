import React from "react";
import Grid from "../../Atoms/Grid/Grid";
import Spacer from "../../Atoms/Space/Space";
import {
  StyledStatsLabel,
  StyledStatsTable,
  StyledStatsTitle,
  StyledStatsValue,
} from "./styles";

export interface StatsTableField {
  label: string;
  value: string | number | undefined;
}
[];

interface Props {
  title: string;
  fields: StatsTableField[];
}

export const StatsTable = ({ title, fields }: Props) => {
  return (
    <StyledStatsTable>
      <StyledStatsTitle>{title}</StyledStatsTitle>
      <Spacer size={8} />
      {fields.map(({ label, value }: StatsTableField) => (
        <Grid
          key={label}
          justifyContent="space-between"
          style={{ width: "100%", paddingVertical: 4 }}
        >
          <StyledStatsLabel>{label}</StyledStatsLabel>
          <StyledStatsValue>{value}</StyledStatsValue>
        </Grid>
      ))}
    </StyledStatsTable>
  );
};
