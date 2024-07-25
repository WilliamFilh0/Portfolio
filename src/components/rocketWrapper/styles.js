import styled from "styled-components";

const RocketNotes = new URL("../../assets/rocketNotes.png", import.meta.url);

import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

export const Center = styled.div`
  position: fixed; //Modal posicionamento
  inset: 0;
  display: grid;
  place-content: center;
  z-index: 999;

  height: 100vh;
  width: 100vw;

  background: rgba(0, 0, 0, 0.7);

  margin-bottom: 5rem; //TIRAR DEPOIS
`;

export const WrapperContainer = styled.div`
  height: 25rem;
  width: 56.25rem;
  background-color: rgba(53, 53, 55, 0.9);
  border-radius: 1.25rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0.938rem;

  position: relative;

  @media (max-width: 870px) {
    /* height: 800px;
    width: 480px; */

    height: 780px;
    width: 390px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 30px;
  }

  @media (max-width: 750px) {
    width: 370px;
  }

  @media (max-width: 375px) {
    width: 350px;
    height: 630px;
    gap: 10px;
  }

  /* border-radius: 5px; */
`;

export const IoMdCloseP = styled(IoMdClose)`
  color: white;

  position: absolute;

  top: 1.6rem;
  right: 1.6rem;

  transition: transform 0.3s;

  &:hover {
    color: red;
    cursor: pointer;
    transform: scale(1.1);
  }

  @media (max-width: 870px) {
    top: 13px;
    right: 14px;
  }

  @media (max-width: 750px) {
    top: 10px;
    right: 11px;
  }
`;

export const WrapperImage = styled.div`
  height: 18.75rem;
  width: 25rem;
  background-image: url(${RocketNotes});
  background-size: cover;
  border-radius: 0.313rem;

  transition: transform 1s;

  &:hover {
    transform: scale(1.05) translateY(-5px);
    cursor: pointer;
  }

  @media (max-width: 870px) {
    width: 365px;
    height: 274px;
  }

  @media (max-width: 750px) {
    width: 340px;
    height: 260px;
  }

  @media (max-width: 375px) {
    width: 300px;
    height: 200px;
    margin-top: 15px;
  }
`;

export const WrappedProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.938rem;
`;

export const Title = styled.h1`
  color: white;

  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-style: normal;
`;

export const TextDescription = styled.p`
  width: 27.5rem;
  /* width: 352px; */
  height: 6.875rem;

  color: white;
  margin-bottom: 0.938rem;

  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-size: 0.875rem;

  @media (max-width: 870px) {
    width: 350px;
    height: 150px;
  }

  @media (max-width: 750px) {
    width: 330px;
    height: 160px;
  }

  @media (max-width: 375px) {
    width: 300px;
    height: 160px;
    font-size: small;
  }
`;

export const TechnologiesCenter = styled.div`
  display: flex;
  align-items: center;

  height: 3.75rem;
  width: 28.125rem;

  flex-wrap: wrap;

  gap: 0.625rem;

  @media (max-width: 875px) {
    width: 300px;
  }
`;

export const TechnologiesSmall = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 1.25rem;
  width: 3.125rem;

  border-radius: 1.25rem;

  /* background-color: rgb(41, 91, 140); */
  /* color: white; */
  background-color: rgb(41, 91, 140);
  color: white;

  margin-bottom: 0.625rem;

  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-size: 0.875rem;
`;

export const TechnologiesMedium = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  height: 1.25rem;
  width: 4.375rem;

  border-radius: 1.25rem;

  background-color: rgb(41, 91, 140);
  color: white;

  margin-bottom: 0.625rem;

  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-size: 0.875rem;
`;

export const TechnologiesLarge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  height: 1.25rem;
  width: 5rem;

  border-radius: 1.25rem;

  background-color: rgb(41, 91, 140);
  color: white;

  margin-bottom: 0.625rem;

  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-size: 0.875rem;
`;

export const TechnologiesExtraLarge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;

  height: 1.25rem;
  width: 8.75rem;

  border-radius: 1.25rem;

  background-color: rgb(41, 91, 140);
  color: white;

  margin-bottom: 0.625rem;

  font-family: "Roboto Slab", serif;
  font-style: normal;
  font-size: 0.875rem;
`;

export const CodeLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`;

export const ViewProjectCodeButton = styled.button`
  height: 1.875rem;
  width: 2.5rem;

  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;

  &:hover {
    cursor: pointer;
  }
`;

export const BsGithubP = styled(BsGithub)`
  color: white;

  &:hover {
    color: rgb(41, 91, 140);
  }
`;

export const FaExternalLinkAltP = styled(FaExternalLinkAlt)`
  color: white;

  &:hover {
    color: rgb(41, 91, 140);
  }
`;

export const TextButton = styled.p`
  color: black;
`;
