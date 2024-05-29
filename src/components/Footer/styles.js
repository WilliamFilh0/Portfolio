import styled from "styled-components";

import { BsTelephone, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 2%;
  justify-content: space-around;

  height: 100px;
  width: 100%;

  border-top: 1px solid #87ceeb;
  background-color: rgba(53, 53, 55, 0.2);
`;

export const Contacts = styled.div`
  display: flex;
  gap: 20px;
`;

export const AuthorSignature = styled.p`
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  color: #87ceeb;
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
