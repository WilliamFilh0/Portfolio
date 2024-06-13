import React from "react";
import { Container, Nav, A, Img } from "./styles";

const imageEletronica = new URL("../../assets/imagePlaca.png", import.meta.url);

export function Header() {
  return (
    <Container>
      <a href="http://localhost:5173/">
        <Img src={imageEletronica.href} alt="image-circuitos" />{" "}
      </a>
      <Nav>
        {" "}
        <A href="#About">About</A>
        <A href=""></A> <A href="#Projects">Projects</A>
        <A href="#Contact">Contacts</A>
      </Nav>
    </Container>
  );
}
