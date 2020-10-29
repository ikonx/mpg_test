import { View } from "react-native";
import styled from "styled-components";

interface Props {
  size: 4 | 8 | 12 | 16 | 20 | 24 | number;
  height?: number;
  width?: number;
}

const Spacer = styled(View)<Props>`
  height: ${({ size, height }) => size || height || 0}px;
  width: ${({ size, width }) => size || width || 0}px;
`;

export default Spacer;
