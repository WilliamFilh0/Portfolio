import styled, { css } from "styled-components";
import { IoClose } from "react-icons/io5";

export const Container = styled.section`
  position: fixed;
  backdrop-filter: blur(60px);
  width: 100%;
  height: 100%;
  inset: 0;

  z-index: 999;

  background: rgba(0, 0, 0, 0.7);

  opacity: 0;
  pointer-events: none;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: translateY(50px);
  transition: 0.5s;

  > svg {
    color: white;

    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: 0.7s;
  }

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0px);

      > svg {
        transform: rotate(0deg);
      }
    `}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const IoCloseP = styled(IoClose)``;

export const A = styled.a`
  text-decoration: none;
  color: white;
  font-size: 25px;
`;
