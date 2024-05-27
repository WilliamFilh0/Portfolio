import React from "react";

import {
  H1,
  Container,
  HeaderContainer,
  ProjectFeed,
  ProjectRocketNotes,
  ProjectTrips,
  Teste1,
  Teste2,
  Teste3,
} from "./styles";

export function Projects() {
  return (
    <>
      <HeaderContainer>
        <H1>Projetos</H1>
      </HeaderContainer>

      <Container>
        <ProjectRocketNotes />
        <ProjectFeed />
        <ProjectTrips />
        <Teste1 />
        <Teste2 />
        <Teste3 />
      </Container>
    </>
  );
}
