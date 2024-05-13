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
} from "./styles";

export function TechnologiesIcons() {
  return (
    <>
      <Container>
        <SiJavascriptP size={40} />
        <BiLogoTypescriptP size={40} />
        <FaReactP size={40} />
        <FaHtml5P size={40} />
        <IoLogoCss3P size={40} />
        <SiStyledcomponentsP size={58} />
        <RiTailwindCssFillP size={40} />
        <FaNodeJsP size={40} />
        <FaFigmaP size={40} />
        <FaGitAltP size={40} />
        <FaGithubP size={40} />
        <SiViteP size={40} />
        <SiNextdotjsP size={40} />
      </Container>
    </>
  );
}
