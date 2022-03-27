import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Category, Icon } from "./styles";

interface IProps extends RectButtonProps {
  title: string;
}

export function CategorySelectButton({ title, ...rest }: IProps) {
  return (
    <Container {...rest}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
}
