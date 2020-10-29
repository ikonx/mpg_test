import { FlexStyle, View, ViewProps } from "react-native";
import styled from "styled-components";

interface Props extends FlexStyle, ViewProps {}

const Grid = styled(View)<Props>`
  flex-direction: ${(props) => props.flexDirection};
  align-items: ${(props) => props.alignItems};
  justify-content: ${(props) => props.justifyContent};
`;

Grid.defaultProps = {
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
};

export default Grid;
