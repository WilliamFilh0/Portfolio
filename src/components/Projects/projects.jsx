import React from "react";
import { useState } from "react";

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
  TexComingSoonMessagete,
  ProjectsContainer,
} from "./styles";

import { RocketWrapper } from "../rocketWrapper/RocketWrapper";

export function Projects() {
  const [openModalRocket, setOpenModalRocket] = useState(false);
  return (
    <>
      <ProjectsContainer>
        <HeaderContainer>
          <H1>Projetos</H1>
        </HeaderContainer>

        <Container>
          <ProjectRocketNotes onClick={() => setOpenModalRocket(true)} />
          <RocketWrapper
            isOpenRocket={openModalRocket}
            setOpenModalRocket={() => setOpenModalRocket(!openModalRocket)}
          />
          <ProjectFeed />
          <ProjectTrips />
          <Teste1>
            <TexComingSoonMessagete>Em Breve</TexComingSoonMessagete>
          </Teste1>
          <Teste2 />
          <Teste3 />
        </Container>
      </ProjectsContainer>
    </>
  );
}
