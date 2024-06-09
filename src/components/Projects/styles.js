import styled from "styled-components";
const rocketNotes = new URL("../../assets/rocketNotes.png ", import.meta.url);
const feed = new URL("../../assets/feed.png ", import.meta.url);

export const ProjectsContainer = styled.div`
  position: relative;
  height: 100vh;
`;

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

  transition: transform 1s;

  border-radius: 5px;

  &:hover {
    transform: scale(1.1) translateY(-5px);
    border: 1px solid #87ceeb;
    cursor: pointer;
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

  border-radius: 5px;

  background-color: blue;

  transition: transform 1s;

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

  border-radius: 5px;

  background-color: green;
`;

export const Teste1 = styled.div`
  grid-area: Teste1;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  margin-top: 20px;

  border-radius: 5px;

  background-color: orange;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  position: relative;
  overflow: hidden;
`;

export const Teste2 = styled.div`
  grid-area: Teste2;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  margin-top: 20px;

  border-radius: 5px;

  background-color: purple;
`;

export const Teste3 = styled.div`
  grid-area: Teste3;

  height: 20.313rem;
  width: 32.813rem;
  /* height: 325px;
  width: 525px; */

  margin-top: 20px;

  border-radius: 5px;

  background-color: magenta;
`;

export const TexComingSoonMessagete = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  transform: rotate(-31deg);

  height: 40px;
  width: 120%;

  position: absolute;

  background-color: black;
  color: white;
`;

// export const WraperPosition = styled(Wrapper)`
//   position: absolute;
//   z-index: 1;
// `;
