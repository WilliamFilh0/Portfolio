import styled from "styled-components";

export const ContactSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.875rem;
  margin-top: 6.25rem;
  margin-bottom: 2.5rem; //Tirar depois

  @media (max-width: 1440px) {
    padding-top: 80px;
  }
`;

export const ContactAreaTitle = styled.h1`
  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: italic;
  color: #c4c4cc;
  color: white;
`;

export const ContactMessage = styled.p`
  color: #a9a9a9;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
`;

export const ContactButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.25rem;

  a {
    text-decoration: none;
  }
`;

export const ButtonContact = styled.button`
  margin-top: 1.25rem;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.5rem;
  width: 7.5rem;
  background-color: rgba(53, 53, 55, 0.9);
  border-radius: 1.5rem;
  color: white;
  gap: 0.438rem;

  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-size: 0.875rem;

  transition: transform 1s;

  &:hover {
    transform: scale(1.2) translateY(-5px);
    cursor: pointer;
    border: 1px solid #87ceeb;
  }
`;

export const CopyButton = styled.button`
  height: 2.5rem;
  width: 12.5rem;

  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-size: 0.875rem;

  background-color: rgba(53, 53, 55, 0.9);
  color: white;

  border-radius: 1.25rem;

  transition: transform 1s;

  &:hover {
    transform: scale(1.2) translate(-5px);
    border: 1px solid #87ceeb;
    cursor: pointer;
  }
`;
