import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  backdrop-filter: blur(60px);
  z-index: 9999;

  height: 70px;
  width: 100%;

  border-bottom: 1px solid #87ceeb;

  //background-color: rgba(42, 42, 44, 0.2); cor que estava antes

  //cor antiga
  /* background-color: rgba(28, 28, 30, 0.6); */

  /* background-color: rgba(48, 48, 50, 0.2); cor que estava um poquinho antes  */
  background-color: rgba(53, 53, 55, 0.2); //cor que esta agora
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;

  gap: 0.625rem;
  list-style: none;

  margin-right: 0.938rem;
  color: #c4c4cc;
`;

export const A = styled.a`
  text-decoration: none;
  color: #c4c4cc;
`;

export const Img = styled.img`
  height: 50px;
  margin-left: 30px;
`;
