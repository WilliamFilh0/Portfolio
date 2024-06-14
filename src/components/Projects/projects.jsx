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
import { FeedWrapper } from "../feedWrapper/feedWrapper";

export function Projects({ id }) {
  const [openModalRocket, setOpenModalRocket] = useState(false);
  const [openModalFeed, setOpenModalFeed] = useState(false);
  return (
    <>
      <ProjectsContainer id={id}>
        <HeaderContainer>
          <H1>Projetos</H1>
        </HeaderContainer>

        <Container>
          <ProjectRocketNotes onClick={() => setOpenModalRocket(true)} />
          <RocketWrapper
            isOpenRocket={openModalRocket}
            setOpenModalRocket={() => setOpenModalRocket(!openModalRocket)}
          />
          <ProjectFeed onClick={() => setOpenModalFeed(true)} />
          <FeedWrapper
            isOpenFeed={openModalFeed}
            setOpenModalFeed={() => setOpenModalFeed(!openModalFeed)}
          />
          <ProjectTrips>
            {" "}
            <TexComingSoonMessagete>Em Breve</TexComingSoonMessagete>
          </ProjectTrips>
          <Teste1>
            <TexComingSoonMessagete>Em Breve</TexComingSoonMessagete>
          </Teste1>
          <Teste2>
            {" "}
            <TexComingSoonMessagete>Em Breve</TexComingSoonMessagete>
          </Teste2>
          <Teste3>
            {" "}
            <TexComingSoonMessagete>Em Breve</TexComingSoonMessagete>
          </Teste3>
        </Container>
      </ProjectsContainer>
    </>
  );
}
