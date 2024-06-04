import styled from "styled-components";

export const FullHeightContainer = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// export const FullScreenDiv = styled.div`
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
// `;

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
  /* 
  background-color: #363638;
  background-color: rgba(28, 28, 30, 0.5); */

  /* //cor que estava usando antes
  background-color: #2a2a2c;
  background-color: rgba(42, 42, 44, 1); */

  background-color: rgba(47, 47, 49, 1);
  background-color: rgba(52, 52, 54, 0.4); /* Um pouco mais clara */
  /* background-color: rgba(42, 42, 44, 1); Um pouco mais escura */
  position: relative;
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
  font-size: 20px;

  color: blue;
  margin-bottom: 1.563rem;
`;

export const NameTitle = styled.h1`
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-size: 33px;
  margin-bottom: 1.563rem;
`;

export const RoleTitle = styled.h2`
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-size: 18px;
  margin-bottom: 2.75rem;
`;

export const ProfileDescription = styled.p`
  color: #a9a9a9;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;
`;
