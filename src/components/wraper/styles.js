import styled from "styled-components";

const RocketNotes = new URL("../../assets/rocketNotes.png", import.meta.url);

import { FaExternalLinkAlt } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { BsGithub } from "react-icons/bs";

export const Center = styled.div`
  /* display: flex;
  align-items: center;
  justify-content: center; */

  /* top: 83rem; */

  margin-bottom: 80px; //TIRAR DEPOIS
`;

export const WrapperContainer = styled.div`
  height: 400px;
  width: 900px;
  background-color: rgba(53, 53, 55, 0.9);
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 15px;

  position: relative;

  /* border-radius: 5px; */
`;

export const IoMdCloseP = styled(IoMdClose)`
  color: white;

  position: absolute;

  top: 1.6rem;
  right: 1.6rem;

  &:hover {
    color: red;
    cursor: pointer;
  }
`;

export const WrapperImage = styled.div`
  height: 300px;
  width: 400px;
  background-image: url(${RocketNotes});
  background-size: cover;
  border-radius: 5px;

  transition: transform 1s;

  &:hover {
    transform: scale(1.05) translateY(-5px);
    cursor: pointer;
  }
`;

export const WrappedProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Title = styled.h1`
  color: white;
`;

export const TextDescription = styled.p`
  width: 440px;
  /* width: 352px; */
  height: 110px;

  color: white;
  margin-bottom: 15px;
`;

export const Technologies = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 20px;
  width: 50px;

  border-radius: 20px;

  background-color: rgb(41, 91, 140);
  color: white;

  margin-bottom: 10px;
`;

export const CodeLinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ViewProjectCodeButton = styled.button`
  height: 30px;
  width: 40px;

  border: none;
  background: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

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
