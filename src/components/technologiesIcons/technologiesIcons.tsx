import React from "react";

import {
  Container,
  FaReactP,
  SiStyledcomponentsP,
  SiJavascriptP,
  FaHtml5P,
  FaGitAltP,
  FaGithubP,
  BiLogoTypescriptP,
  IoLogoCss3P,
  FaNodeJsP,
  FaFigmaP,
  RiTailwindCssFillP,
  SiViteP,
  SiNextdotjsP,
  MainContainer,
  H1,
  HeaderContainer,
} from "./styles";

export function TechnologiesIcons() {
  return (
    <>
      <MainContainer>
        <HeaderContainer>
          <H1>Habilidades</H1>
        </HeaderContainer>

        <Container>
          <FaHtml5P size="2.5rem" />
          <IoLogoCss3P size="2.5rem" />
          <SiJavascriptP size="2.5rem" />
          <BiLogoTypescriptP size="3.25rem" />
          <FaReactP size="2.5rem" />
          <SiStyledcomponentsP size="3.625rem" />
          <RiTailwindCssFillP size="2.5rem" />
          <FaNodeJsP size="2.5rem" />
          <FaFigmaP size="2.5rem" />
          <FaGitAltP size="2.5rem" />
          <FaGithubP size="2.5rem" />
          <SiViteP size="2.5rem" />
          <SiNextdotjsP size="2.5rem" />
        </Container>
      </MainContainer>
    </>
  );
}
