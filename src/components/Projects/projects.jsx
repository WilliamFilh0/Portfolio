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

import { Wrapper } from "../wraper/wraper";

export function Projects() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <ProjectsContainer>
        <HeaderContainer>
          <H1>Projetos</H1>
        </HeaderContainer>

        <Container>
          <ProjectRocketNotes onClick={() => setOpenModal(true)} />
          <Wrapper
            isOpen={openModal}
            setModalOpen={() => setOpenModal(!openModal)}
          />
          <ProjectFeed />
          <ProjectTrips />
          <Teste1>
            <TexComingSoonMessagete>Em Breve</TexComingSoonMessagete>
          </Teste1>
          <Teste2 />
          <Teste3 />
          {/* <Wrapper /> */}
        </Container>
      </ProjectsContainer>
    </>
  );
}
