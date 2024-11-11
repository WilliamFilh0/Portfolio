import React from "react";

import {
  Container,
  FaReactP,
  SiStyledcomponentsP,
  SiJavascriptP,
  FaHtml5P,
  FaGitAltP,
  FaGithubP,
  SiTypescriptP,
  IoLogoCss3P,
  FaNodeJsP,
  FaFigmaP,
  RiTailwindCssFillP,
  SiViteP,
  SiNextdotjsP,
  SiAxiosP,
  MainContainer,
  H1,
  HeaderContainer,
  TechContainer,
  TechIconTitle,
} from "./styles";

export function TechnologiesIcons({ id }) {
  return (
    <>
      <MainContainer>
        <HeaderContainer id={id}>
          <H1>Habilidades</H1>
        </HeaderContainer>

        <Container>
          <TechContainer>
            <FaHtml5P size="2.5rem" />
            <TechIconTitle>HTML</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <IoLogoCss3P size="2.5rem" />
            <TechIconTitle>CSS</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <SiJavascriptP size="2.5rem" />
            <TechIconTitle>JavaScript</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <SiTypescriptP size="2.5rem" />
            <TechIconTitle>TypeScript</TechIconTitle>
          </TechContainer>
          {/* size="3.25rem" */}

          <TechContainer>
            <FaReactP size="2.5rem" />
            <TechIconTitle>React</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <SiStyledcomponentsP size="2.5rem" />
            <TechIconTitle>CSS-in-Js</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <RiTailwindCssFillP size="2.5rem" />
            <TechIconTitle>TailWind</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <FaNodeJsP size="2.5rem" />
            <TechIconTitle>NodeJS</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <FaFigmaP size="2.5rem" />
            <TechIconTitle>Figma</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <FaGitAltP size="2.5rem" />
            <TechIconTitle>Git</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <FaGithubP size="2.5rem" />
            <TechIconTitle>GitHub</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <SiViteP size="2.5rem" />
            <TechIconTitle>Vite</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <SiNextdotjsP size="2.5rem" />
            <TechIconTitle>Next</TechIconTitle>
          </TechContainer>

          <TechContainer>
            <SiAxiosP size="2.5rem" />
            <TechIconTitle>Axios</TechIconTitle>
          </TechContainer>
        </Container>
      </MainContainer>
    </>
  );
}
