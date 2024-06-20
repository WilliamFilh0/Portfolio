import React from "react";
import {
  Container,
  AuthorSignature,
  Contacts,
  ContainerContact,
  HiOutlineMailP,
  BsTelephoneP,
  BsLinkedinP,
  BsGithubP,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <AuthorSignature>
        Developed by <b> William</b>. Source code on{" "}
        <a href="https://github.com/WilliamFilh0/Portfolio" target="blank">
          GitHub.
        </a>
      </AuthorSignature>
      {/* <Contacts>
        <ContainerContact>
          <HiOutlineMailP size={44} />
        </ContainerContact>
        <ContainerContact>
          <BsLinkedinP size={39} />
        </ContainerContact>
        <ContainerContact>
          <BsGithubP size={40} />
        </ContainerContact>
      </Contacts> */}
    </Container>
  );
}
