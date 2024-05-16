import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 40px;
`;

export const Container = styled.div`
  display: flex;
  gap: 10px;
  /* display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  grid-template-areas: "block block block
  block block block"; */
`;

export const Block = styled.div`
  /* grid-area: block; */

  height: 60px;
  width: 90px;

  background-color: red;
`;

export const H1 = styled.h1`
  color: #c4c4cc;
`;
