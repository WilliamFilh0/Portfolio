import React, { useEffect, useState } from "react";

import { Container, PiArrowBendRightUpBoldP } from "./styles";

export function ScrollTopButton({ id }) {
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
