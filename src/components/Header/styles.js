import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 3.125rem;
  width: 100%;

  border-bottom: 0.1px solid #87ceeb;

  /* background-color: #312e38; //GRAY */
  /* background-color: #383838;
  background-color: #2c2c2c; */

  /* background-color: #1c1c1e; */
  background-color: rgba(28, 28, 30, 0.6);
`;

export const Ul = styled.ul`
  display: flex;
  align-items: center;

  gap: 0.625rem;
  list-style: none;

  margin-right: 0.938rem;
  color: #c4c4cc;
`;

export const Img = styled.img`
  height: 50px;
  margin-left: 30px;
`;
