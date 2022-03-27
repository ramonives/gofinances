import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface IProps extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({ title, onPress, ...rest }: IProps) {
  return (
    <Container {...rest} onPress={onPress}>
      <Title>{title}</Title>
    </Container>
  );
}
