import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import theme from "../../../global/styles/theme";

export const Container = styled(TextInput).attrs({
  placeholderTextColor: theme.colors.text,
})`
  width: 100%;
  padding: ${RFValue(16)}px ${RFValue(18)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text_dark};
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  margin-bottom: ${RFValue(8)}px;
`;