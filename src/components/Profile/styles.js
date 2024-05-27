import styled, { keyframes } from "styled-components";
// import keyframes from "styled-components";
// const Profile = new URL("../../assets/Profile.png", import.meta.url);

export const CenteredContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  position: relative;
`;

const float = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
`;

export const UserProfile = styled.div`
  width: 500px;
  height: 510px;
  /* width: 400px;
  height: 400px; */

  display: flex;

  align-items: center;
  justify-content: center;

  /* clip-path: polygon(0% 0%, 100% 0%, 80% 100%, 20% 100%); */
  /* clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); */

  /* clip-path: polygon(
    50% 0%,
    90% 10%,
    100% 50%,
    90% 90%,
    50% 100%,
    10% 90%,
    0% 50%,
    10% 10%
  ); */

  animation: ${float} 5s ease-in-out infinite;

  //De cima(escuro) pra baixo(claro)
  background: linear-gradient(
    180deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

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

export const Img = styled.img`
  height: 400px;
  /* height: 300px; */
  position: relative;
  z-index: 2;
`;

export const ImgBackground = styled.img`
  height: 400px;
  /* height: 300px; */
  position: absolute;
  z-index: 1;
`;
