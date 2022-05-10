import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

interface IContainerProps {
  color: string
}

export const Container = styled.View<IContainerProps>`
  background-color: ${({ theme }) => theme.colors.shape};
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding: ${RFValue(13)}px ${RFValue(24)}px;
  border-radius: 5px;
  border-left-width: 4px;
  border-left-color: ${({ color }) => color};
  margin-bottom: 8px;
`;

export const Title = styled.Text`
 font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};
`;

export const Amount = styled.Text`
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.title};
`;

