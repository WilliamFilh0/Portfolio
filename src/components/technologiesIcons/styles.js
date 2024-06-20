import styled from "styled-components";
import { FaReact, FaHtml5, FaGithub } from "react-icons/fa6";
import { FaGitAlt, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiJavascript,
  SiVite,
  SiNextdotjs,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";

export const MainContainer = styled.div`
  margin-top: 40px; //TIRAR DEPOIS
`;

export const H1 = styled.h1`
  color: #c4c4cc;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 50px;
  padding-top: 80px;
`;

export const Container = styled.div`
  height: 3.125rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 2rem;
  /* gap: 3.125rem; */
`;

export const TechIconTitle = styled.p`
  color: white;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
  align-items: center;
  justify-content: center;

  height: 5.625rem;
  width: 5.625rem;

  border-radius: 20px;

  /* background-color: rgba(28, 28, 30, 0.2); Cor que estava antes*/
  /* background-color: rgba(48, 48, 50, 0.9); */
  background-color: rgba(53, 53, 55, 0.9); /* Um pouco mais clara */

  transition: transform 1s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2) translateY(-5px);

    svg {
      color: #87ceeb;
    }
  }
`;

export const FaReactP = styled(FaReact)`
  color: white;
`;

export const SiStyledcomponentsP = styled(SiStyledcomponents)`
  color: white;
`;

export const SiJavascriptP = styled(SiJavascript)`
  color: white;
`;

export const FaHtml5P = styled(FaHtml5)`
  color: white;
`;

export const FaGitAltP = styled(FaGitAlt)`
  color: white;
`;

export const FaGithubP = styled(FaGithub)`
  color: white;
`;

export const BiLogoTypescriptP = styled(BiLogoTypescript)`
  color: white;
`;

export const IoLogoCss3P = styled(IoLogoCss3)`
  color: white;
`;

export const FaNodeJsP = styled(FaNodeJs)`
  color: white;
`;

export const FaFigmaP = styled(FaFigma)`
  color: white;
`;

export const RiTailwindCssFillP = styled(RiTailwindCssFill)`
  color: white;
`;

export const SiViteP = styled(SiVite)`
  color: white;
`;

export const SiNextdotjsP = styled(SiNextdotjs)`
  color: white;
`;
