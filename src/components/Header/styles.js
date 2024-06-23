import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  backdrop-filter: blur(60px);
  z-index: 998;

  height: 4.375rem;
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

  gap: 0.813rem;
  list-style: none;

  margin-right: 0.938rem;
  color: rgba(196, 196, 204, 0.2);
`;

export const A = styled.a`
  text-decoration: none;
  color: #c4c4cc;
  position: relative;
  display: inline-block;

  font-family: "Lato", sans-serif;
  font-weight: 600;
  font-size: 1rem;

  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0.25rem;
    bottom: -5px;
    left: 50%;
    transform: translateX(-50%);
    background-image: linear-gradient(
      0deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(9, 9, 121, 1) 35%,
      rgba(0, 212, 255, 1) 100%
    );
    transition: width 0.6s ease, 0.6s ease;
  }

  &:hover {
    color: white;
  }

  &:hover::after {
    width: 100%;
    left: 0;
    transform: translateX(0);
  }

  &:not(:hover)::after {
    width: 0;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const Img = styled.img`
  height: 3.125rem;
  margin-left: 1.875rem;
`;
