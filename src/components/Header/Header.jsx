import React from "react";
import { Container, Nav, A, Img, FiAlignJustifyP, Section } from "./styles";

const imageEletronica = new URL("../../assets/imagePlaca.png", import.meta.url);

export function Header({ setMenuIsVisible }) {
  return (
    <Container>
      <a href="http://localhost:5173/">
        <Img src={imageEletronica.href} alt="image-circuitos" />{" "}
      </a>
      <Nav>
        {" "}
        <A href="#About">Sobre</A>
        <A href="#Skills">Habilidades</A>
        <A href="#Projects">Projetos</A>
        <A href="#Contact">Contatos</A>
      </Nav>

      <Section>
        <FiAlignJustifyP size={40} onClick={() => setMenuIsVisible(true)} />
      </Section>
    </Container>
  );
}
