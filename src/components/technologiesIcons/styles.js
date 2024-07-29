import styled from "styled-components";
import { FaReact, FaHtml5, FaGithub } from "react-icons/fa6";
import { FaGitAlt, FaNodeJs, FaFigma } from "react-icons/fa";
import {
  SiStyledcomponents,
  SiJavascript,
  SiVite,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiAxios } from "react-icons/si";

export const MainContainer = styled.div`
  margin-top: 2.5rem; //TIRAR DEPOIS

  @media (max-width: 1440px) {
    /* width: 1170px; */
    width: 500px; //O tamanho do componente onde fica os icones

    margin-left: auto;
    margin-right: auto;
    margin-bottom: 80px;
    padding-bottom: 60px;
  }

  @media (max-width: 900px) {
    /* width: 430px; */
    /* width: 400px; */
    width: 220px;
  }
`;

export const H1 = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: italic;
  color: white;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 3.125rem;
  padding-top: 5rem;
`;

export const Container = styled.div`
  height: 3.125rem;

  /*display: flex;
  align-items: center;
  justify-content: center; */

  display: grid;
  /* place-items: center; */

  grid-template-columns: repeat(14, 80px); //5%
  grid-template-rows: 1fr;

  align-items: center;
  justify-content: center;
  gap: 3rem;

  /* gap: 3.125rem; */

  /* @media (max-width: 1440px) {
    flex-wrap: wrap;
  } */

  @media (max-width: 1440px) {
    grid-template-columns: repeat(7, 80px); //5%
    grid-template-rows: 2fr;

    gap: 2rem;
  }

  @media (max-width: 870px) {
    grid-template-columns: repeat(4, 80px); //5%
    height: 300px;
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(2, 80px); //5%
    height: 800px;
    width: 200px;

    margin-left: auto;
    margin-right: auto;
  }
`;

export const TechIconTitle = styled.p`
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  color: white;

  font-size: 0.938rem;
`;

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.313rem;
  align-items: center;
  justify-content: center;

  height: 5.625rem;
  width: 5.625rem;

  border-radius: 1.25rem;

  background-color: rgba(53, 53, 55, 0.9);

  transition: transform 1s;

  &:hover {
    cursor: pointer;
    transform: scale(1.2) translateY(-5px);

    svg {
      color: #87ceeb;
    }
  }

  @media (max-width: 1440px) {
    height: 85px;
    width: 85px;
    /* margin-top: 0; */
  }

  /* @media (max-width: 1024px) {
    background-color: rebeccapurple;
  }

  @media (max-width: 865px) {
    background-color: blue;
  }
  @media (max-width: 900px) {
    background-color: gray;
  } */
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

export const SiTypescriptP = styled(SiTypescript)`
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

export const SiAxiosP = styled(SiAxios)`
  color: white;
`;
