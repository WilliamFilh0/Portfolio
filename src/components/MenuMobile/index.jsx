import React, { useEffect } from "react";
import { Container, IoCloseP, A, Nav } from "./styles";

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);
  return (
    <Container isVisible={menuIsVisible}>
      <IoCloseP size={45} onClick={() => setMenuIsVisible(false)} />
      <Nav>
        {" "}
        <A href="#About" onClick={() => setMenuIsVisible(false)}>
          Sobre
        </A>
        <A href="#Skills" onClick={() => setMenuIsVisible(false)}>
          Habilidades
        </A>
        <A href="#Projects" onClick={() => setMenuIsVisible(false)}>
          Projetos
        </A>
        <A href="#Contact" onClick={() => setMenuIsVisible(false)}>
          Contatos
        </A>
      </Nav>
    </Container>
  );
}
