import React from "react";
import {
  BsLinkedinP,
  HiOutlineMailP,
  SiGithubP,
  Container,
  Center,
} from "./styles";

export function Contact() {
  return (
    <Center>
      <Container>
        <a href="mailto:williamaraujodev@gmail.com" target="_blank">
          <HiOutlineMailP size="2.5rem" />
        </a>
      </Container>
      <Container>
        <a
          href="https://www.linkedin.com/in/william-filho-23363a26b/"
          target="_blank"
        >
          <BsLinkedinP size="2.5rem" />
        </a>
      </Container>
      {/* <Container>
        <a href="https://github.com/WilliamFilh0" target="_blank">
          <SiGithubP size="2.5rem" />
        </a>
      </Container> */}
    </Center>
  );
}
