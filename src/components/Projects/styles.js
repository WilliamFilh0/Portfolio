import styled from "styled-components";
const rocketNotes = new URL("../../assets/rocketNotes.png ", import.meta.url);
const feed = new URL("../../assets/feed.png ", import.meta.url);

export const ProjectsContainer = styled.div`
  height: 100vh;
  padding-top: 3.125rem;

  @media (max-width: 1440px) {
    padding-top: 1.25rem;
    height: 470px;

    //Esta afetando a centralizaçao do componenete quando a tela diminui
    /* margin-left: 50px; //Centralizar */
  }

  @media (max-width: 870px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* padding-top: 300px; */
    height: 720px;
    padding-top: 30px;
    /* background-color: red; */
  }

  @media (max-width: 750px) {
    height: 1270px;
    /* background-color: blueviolet; */
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 3.75rem; //TIRAR DEPOIS
  margin-bottom: 3.125rem;
`;

export const H1 = styled.h1`
  color: #c4c4cc;

  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: italic;

  color: white;
`;

export const Container = styled.div`
  /* display: flex;
  gap: 40px;
  margin-left: 95px; */
  display: grid;
  margin-left: 5.938rem;

  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  grid-template-areas:
    "ProjectRocketNotes  ProjectFeed ProjectTrips"
    "Teste1 Teste2 Teste3";

  margin-bottom: 12.5rem; //Tirar depois

  @media (max-width: 1690px) {
    margin-left: 60px;
  }

  @media (max-width: 1550px) {
    margin-left: 0px;
  }

  @media screen and (min-width: 1380px) and (max-width: 1550px) {
    margin-left: 40px;
  }

  @media (max-width: 1440px) {
    /* margin-left: 50px; // */
    margin-bottom: 0px;
    /* background-color: orange; */
  }

  /* @media (max-width: 1366px) {
  } */

  @media (max-width: 1050px) {
    /* background-color: blue; */
    margin-left: 0;
  }

  @media (max-width: 870px) {
    /* margin-left: auto;
    margin-right: auto; */
    width: 680px;

    margin-left: 0;

    /* background-color: black; */

    /* background-color: red; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;

    grid-template-areas:
      "ProjectRocketNotes ProjectFeed "
      "Teste1 ProjectTrips "
      "Teste2  Teste3";
  }

  @media (max-width: 750px) {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
    width: 300px;

    /* background-color: bisque; */
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;

    grid-template-areas:
      "ProjectRocketNotes"
      "ProjectFeed"
      "ProjectTrips"
      "Teste1"
      "Teste2"
      "Teste3";
  }

  @media (max-width: 550px) {
    /* background-color: blueviolet; */
  }
`;

export const ProjectRocketNotes = styled.div`
  grid-area: ProjectRocketNotes;

  height: 20.313rem; //325px
  width: 32.813rem; //525px
  /* height: 325px;
  width: 525px; */

  background-image: url(${rocketNotes});
  background-size: cover;

  /* background-color: red; */

  transition: transform 1s;

  border-radius: 0.313rem;

  &:hover {
    transform: scale(1.1) translateY(-5px);
    border: 1px solid #87ceeb;
    cursor: pointer;
  }

  @media (max-width: 1690px) {
    height: 18.2817rem; // 292px
    width: 29.5317rem; // 472px
  }

  @media (max-width: 1440px) {
    height: 180px;
    width: 328px;
  }

  @media (max-width: 1024px) {
    height: 162px;
    width: 295.2px;
  }
`;

export const ProjectFeed = styled.div`
  grid-area: ProjectFeed;

  background-image: url(${feed});
  background-size: cover;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  border-radius: 0.313rem;

  /* background-color: blue; */

  transition: transform 1s;

  @media (max-width: 1690px) {
    height: 18.2817rem; // 292px
    width: 29.5317rem; // 472px
  }

  @media (max-width: 1440px) {
    height: 180px;
    width: 328px;
  }

  @media (max-width: 1024px) {
    height: 162px;
    width: 295.2px;
  }

  &:hover {
    transform: scale(1.1) translateY(-5px);
    border: 1px solid #87ceeb;
    cursor: pointer;
  }
`;

export const ProjectTrips = styled.div`
  grid-area: ProjectTrips;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  border-radius: 0.313rem;

  /* background-color: green; */
  background-color: rgba(53, 53, 55, 0.9);
  border: 1px solid rgb(49, 57, 88);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 1690px) {
    height: 18.2817rem; // 292px
    width: 29.5317rem; // 472px
  }

  @media (max-width: 1440px) {
    height: 180px;
    width: 328px;
  }
  @media (max-width: 1024px) {
    height: 162px;
    width: 295.2px;
  }
`;

export const Teste1 = styled.div`
  grid-area: Teste1;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  margin-top: 1.25rem;

  border-radius: 0.313rem;

  /* background-color: orange; */
  background-color: rgba(53, 53, 55, 0.9);
  border: 1px solid rgb(49, 57, 88);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 1690px) {
    height: 18.2817rem; // 292px
    width: 29.5317rem; // 472px
  }

  @media (max-width: 1440px) {
    height: 180px;
    width: 328px;
    /* margin-top: 0; */
  }

  @media (max-width: 865px) {
    height: 180px;
    width: 328px;
    margin-top: 0;
  }
  @media (max-width: 900px) {
    height: 180px;
    width: 328px;
    /* margin-top: 0; */
  }

  @media (max-width: 1024px) {
    height: 162px;
    width: 295.2px;
  }
`;

export const Teste2 = styled.div`
  grid-area: Teste2;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  margin-top: 1.25rem;

  border-radius: 0.313rem;

  /* background-color: purple; */
  background-color: rgba(53, 53, 55, 0.9);
  border: 1px solid rgb(49, 57, 88);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 1690px) {
    height: 18.2817rem; // 292px
    width: 29.5317rem; // 472px
  }

  @media (max-width: 1440px) {
    height: 180px;
    width: 328px;
  }

  @media (max-width: 1024px) {
    height: 162px;
    width: 295.2px;
  }
`;

export const Teste3 = styled.div`
  grid-area: Teste3;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  margin-top: 1.25rem;

  border-radius: 0.313rem;

  /* background-color: magenta; */
  background-color: rgba(53, 53, 55, 0.9);
  border: 1px solid rgb(49, 57, 88);

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;

  @media (max-width: 1690px) {
    height: 18.2817rem; // 292px
    width: 29.5317rem; // 472px
  }

  @media (max-width: 1440px) {
    height: 180px;
    width: 328px;
  }

  @media (max-width: 1024px) {
    height: 162px;
    width: 295.2px;
  }
`;

export const TexComingSoonMessagete = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(-31deg);

  height: 2.813rem;
  width: 120%;

  position: absolute;

  /* background-color: black;
  background-color: rgba(30, 30, 32, 0.6); */
  background-color: rgba(45, 45, 47, 1);

  color: white;

  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
  color: #c4c4cc;

  /* color: #a9a9a9;
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 400;*/
  font-size: 1.5rem;
`;
