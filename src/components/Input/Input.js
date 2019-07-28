import React from "react";
import { Container } from "./styled";
const Input = props => {
  return (
    <Container>
      <input {...props} />
    </Container>
  );
};

export default Input;
