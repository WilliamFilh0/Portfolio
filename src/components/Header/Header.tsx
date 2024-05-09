import React from "react";
import { Container, Ul } from "./styles";

export function Header() {
  return (
    <Container>
      <Ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </Ul>
    </Container>
  );
}
