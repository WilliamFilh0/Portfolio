import styled from "styled-components";

export const ContactSectionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
  margin-top: 100px;
  margin-bottom: 40px; //Tirar depois
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
  gap: 20px;

  a {
    text-decoration: none;
  }
`;

export const ButtonContact = styled.button`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 40px;
  width: 120px;
  background-color: rgba(53, 53, 55, 0.9);
  border-radius: 20px;
  color: white;
  gap: 7px;

  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-size: 14px;

  transition: transform 1s;

  &:hover {
    transform: scale(1.2) translateY(-5px);
    cursor: pointer;
    border: 1px solid #87ceeb;
  }
`;

export const CopyButton = styled.button`
  height: 40px;
  width: 200px;

  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-size: 14px;

  background-color: rgba(53, 53, 55, 0.9);
  color: white;

  border-radius: 20px;

  transition: transform 1s;

  &:hover {
    transform: scale(1.2) translate(-5px);
    border: 1px solid #87ceeb;
    cursor: pointer;
  }
`;
