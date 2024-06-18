import React from "react";

import { Container, PiArrowBendRightUpBoldP } from "./styles";

export function ScrollTopButton({ id, isOpen }) {
  function Handle() {
    alert("Fui clicado 😁👍");
  }
  if (isOpen) {
    return (
      <>
        <a href="#About">
          <Container id={id}>
            <PiArrowBendRightUpBoldP size={30} />
          </Container>
        </a>
      </>
    );
  }
}
