import styled from "styled-components";
const rocketNotes = new URL("../../assets/rocketNotes.png ", import.meta.url);
const feed = new URL("../../assets/feed.png ", import.meta.url);

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 60px; //TIRAR DEPOIS
  margin-bottom: 3.125rem;
`;

export const H1 = styled.h1`
  color: #c4c4cc;
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

  margin-bottom: 200px; //Tirar depois
`;

export const ProjectRocketNotes = styled.div`
  grid-area: ProjectRocketNotes;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  background-image: url(${rocketNotes});
  background-size: cover;

  background-color: red;
`;

export const ProjectFeed = styled.div`
  grid-area: ProjectFeed;

  background-image: url(${feed});
  background-size: cover;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  background-color: blue;
`;

export const ProjectTrips = styled.div`
  grid-area: ProjectTrips;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  background-color: green;
`;

export const Teste1 = styled.div`
  grid-area: Teste1;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  margin-top: 20px;

  background-color: orange;
`;

export const Teste2 = styled.div`
  grid-area: Teste2;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  margin-top: 20px;

  background-color: purple;
`;

export const Teste3 = styled.div`
  grid-area: Teste3;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  margin-top: 20px;

  background-color: magenta;
`;
