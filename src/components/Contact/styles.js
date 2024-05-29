import styled from "styled-components";

import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70px;
  width: 70px;
  background-color: rgba(53, 53, 55, 0.9);
  border-radius: 20px;

  transition: transform 1s;

  &:hover {
    transform: scale(1.2) translateY(-5px);
    cursor: pointer;
    border: 1px solid #87ceeb;
  }
`;

export const BsLinkedinP = styled(BsLinkedin)`
  color: white;
`;

export const HiOutlineMailP = styled(HiOutlineMail)`
  color: white;
`;

export const SiGithubP = styled(SiGithub)`
  color: white;
`;
