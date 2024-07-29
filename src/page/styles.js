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
  //Mudei porque estava muito graande, o espaçamento entre o elemento e a borda, era antes 1410px
  @media (max-width: 1440px) {
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

  @media (max-width: 900px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* height: 650px; */
    height: 620px; //Mudei o tmanho da altura
    width: 380px;

    padding-left: 0;
  }

  @media (max-width: 375px) {
    height: 585px;
    width: 340px;
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

  @media (max-width: 1440px) {
    //max-width: 1450px
    //1350px
    font-size: 12px;
  }

  @media (max-width: 900px) {
    /* width: 320px; */
    width: 300px;
    height: 540px;

    display: block;

    padding-left: 0;
  }
`;

export const ContactContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;

  @media (max-width: 1440px) {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }

  @media (max-width: 900px) {
    position: absolute;
    top: 21rem;
    right: 2.5rem;
  }
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
  @media (max-width: 900px) {
    margin-bottom: 15px;
    font-size: 16px;
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

  @media (max-width: 900px) {
    margin-bottom: 15px;
    font-size: 19px;
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

  @media (max-width: 900px) {
    margin-bottom: 15px;
    font-size: 20px;
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

  @media (max-width: 900px) {
    margin-bottom: 15px;
    font-size: 12px;
    width: 300px;

    /* letter-spacing: 2px;
    word-spacing: 4px; */
  }
`;
