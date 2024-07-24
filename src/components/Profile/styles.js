import styled, { keyframes } from "styled-components";
// import keyframes from "styled-components";
// const Profile = new URL("../../assets/Profile.png", import.meta.url);

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 900px) {
    margin-top: 30px;
  }
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }


`;

const floatSmall = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const UserProfile = styled.div`
  width: 31.25rem;
  height: 31.875rem;
  /* width: 400px;
  height: 400px; */

  display: flex;

  align-items: center;
  justify-content: center;

  animation: ${float} 5s ease-in-out infinite;

  @media (max-width: 900px) {
    animation: ${floatSmall} 2s ease-in-out infinite;
  }

  //De cima(escuro) pra baixo(claro)
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  @media (max-width: 1440px) {
    height: 320px;
    width: 320px;
  }

  //Mobile
  @media (max-width: 900px) {
    height: 288px;
    width: 288px;

    @media (max-width: 550px) {
      /* border: 1px solid purple; */
    }
  }

  //Circular
  /* background: radial-gradient(
    circle,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  ); */

  //De cima (claro) pra baixo (escuro)
  /* background: linear-gradient(
    0deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  ); */

  // De esquerdo(Escuro) pro direito(claro)
  /* background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  ); */

  /* border-radius: 100%;
  border: 1px solid blue; */
`;

//Imagem minha
export const Img = styled.img`
  height: 25rem;
  /* height: 300px; */
  position: relative;
  z-index: 2;

  @media (max-width: 1440px) {
    height: 320px;
    width: 300px;
  }
  //Mobile
  @media (max-width: 900px) {
    height: 288px;
    width: 270px;
  }

  @media (max-width: 550px) {
    /* border: 1px solid red; */
  }
`;

//Bob flutuante
export const ImgBackground = styled.img`
  height: 25rem;
  /* height: 300px; */
  position: absolute;
  z-index: 1;

  @media (max-width: 1440px) {
    height: 320px;
    width: 400px;

    //Mudando o tamnho do bob
    width: 380px;
  }
  //Mobile
  @media (max-width: 900px) {
    height: 288px;
    width: 360px;
  }

  @media (max-width: 550px) {
    /* border: 1px solid red; */
  }
`;
