import styled from "styled-components";

export const FullHeightContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2.813rem;

  width: 71.125rem;
  height: 34.375rem;

  background-color: rgba(52, 52, 54, 0.4); /* Um pouco mais clara */
  position: relative;

  //Retangulo maior onde fica os elementos
  @media (max-width: 1410px) {
    /* height: 327px;
    width: 677px; */
    height: 360px;
    /* width: 730px; */
    width: 780px;
    gap: 25px;

    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;

    padding-left: 30px;

    /* display: flex;
    align-items: center;
    justify-content: center; */
  }
`;

export const AboutMe = styled.div`
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  font-size: 1rem;
  color: white;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  /* line-height: 1.7; */

  width: 32.75rem;
  height: 7.688rem;

  @media (max-width: 1350px) {
    font-size: 12px;
  }
`;

export const ContactContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;
`;

export const AboutTitle = styled.p`
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-style: normal;
  font-size: 1.25rem;

  color: blue;
  margin-bottom: 1.563rem;

  @media (max-width: 1440px) {
    margin-bottom: 15px;
  }
`;

export const NameTitle = styled.h1`
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-size: 2.063rem;
  margin-bottom: 1.563rem;

  @media (max-width: 1440px) {
    margin-bottom: 20px;
  }
`;

export const RoleTitle = styled.h2`
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 1.125rem;
  margin-bottom: 2.75rem;

  @media (max-width: 1440px) {
    margin-bottom: 20px;
  }
`;
//Colocando tamanho no texto
export const ProfileDescription = styled.p`
  color: #a9a9a9;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;

  @media (max-width: 1440px) {
    width: 370px;
  }
`;
