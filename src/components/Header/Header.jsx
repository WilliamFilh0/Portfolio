import React from "react";
import { Container, Ul, Img } from "./styles";

const imageEletronica = new URL("../../assets/imagePlaca.png", import.meta.url);

export function Header() {
  return (
    <Container>
      <a href="http://localhost:5173/">
        <Img src={imageEletronica.href} alt="image-circuitos" />{" "}
      </a>
      <Ul>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </Ul>
    </Container>
  );
}
