import React from "react";
import { Container, Ul, Img } from "./styles";

const imageEletronica = new URL(
  "../../assets/imageEletronica.png",
  import.meta.url
);

export function Header() {
  return (
    <Container>
      <Img src={imageEletronica.href} alt="image-circuitos" />{" "}
      <Ul>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Contacts</li>
      </Ul>
    </Container>
  );
}
