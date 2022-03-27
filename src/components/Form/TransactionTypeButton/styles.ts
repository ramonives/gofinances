import styled, { css } from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

interface IIconProps {
  type: "up" | "down";
  isActive: boolean;
}

interface IButtonProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled(RectButton)<IButtonProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: ${RFValue(16)}px;

  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}
  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`;

export const Icon = styled(Feather)<IIconProps>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
  margin-right: ${RFValue(12)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title};
`;
