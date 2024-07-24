import styled from "styled-components";

import { BsLinkedin } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";

export const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.938rem;

  @media (max-width: 900px) {
    gap: 12px;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 4.375rem; //70px
  width: 4.375rem; //70px
  background-color: rgba(53, 53, 55, 0.9);
  border-radius: 1.25rem;

  transition: transform 1s;

  &:hover {
    transform: scale(1.2) translateY(-5px);
    cursor: pointer;
    border: 1px solid #87ceeb;
  }
  //Diminuir border Radius
  @media (max-width: 1440px) {
    height: 55px;
    width: 55px;
    border-radius: 10px;

    > a {
      > svg {
        width: 36px;
        height: 36px;
      }
    }
  }

  @media (max-width: 900px) {
    height: 50px;
    width: 50px;
    border-radius: 15px;

    > a {
      > svg {
        width: 34px;
        height: 34px;
      }
    }
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
