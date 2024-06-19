import styled from "styled-components";
import { PiArrowBendRightUpBold } from "react-icons/pi";

export const Container = styled.button`
  height: 50px;
  width: 50px;

  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 998;

  background-color: rgba(53, 53, 55, 0.6);
  border-radius: 100%;

  border: none;

  &:hover {
    cursor: pointer;
  }
`;

export const PiArrowBendRightUpBoldP = styled(PiArrowBendRightUpBold)`
  color: #87ceeb;
`;
