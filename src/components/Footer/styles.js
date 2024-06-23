import styled from "styled-components";

import { BsTelephone, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1.25rem 2%;
  /* justify-content: space-around; */
  justify-content: center;

  /* height: 100px; */
  width: 100%;

  /* border-top: 1px solid #87ceeb; */
  background-color: rgba(53, 53, 55, 0.2);
  background-color: rgba(45, 45, 47, 0.6);
`;

export const Contacts = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 3.75rem;
  width: 3.75rem;

  background-color: rgba(53, 53, 55, 0.6);
  border-radius: 1.25rem;

  transition: transform 1s;

  &:hover {
    transform: scale(1.1) translateY(-5px);
    cursor: pointer;
    border: 1px solid #87ceeb;
  }
`;

export const AuthorSignature = styled.p`
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  /* font-size: 1rem; */
  font-size: 0.875rem;
  color: #87ceeb;
  color: #6b7280;

  a {
    text-decoration: none;
    color: purple;
  }
`;

export const HiOutlineMailP = styled(HiOutlineMail)`
  color: #87ceeb;

  :hover {
    cursor: pointer;
  }
`;
export const BsTelephoneP = styled(BsTelephone)`
  color: #87ceeb;

  :hover {
    cursor: pointer;
  }
`;
export const BsLinkedinP = styled(BsLinkedin)`
  color: #87ceeb;

  :hover {
    cursor: pointer;
  }
`;
export const BsGithubP = styled(BsGithub)`
  color: #87ceeb;

  :hover {
    cursor: pointer;
  }
`;
