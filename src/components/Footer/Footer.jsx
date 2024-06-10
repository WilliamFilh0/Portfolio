import React from "react";
import {
  Container,
  AuthorSignature,
  Contacts,
  HiOutlineMailP,
  BsTelephoneP,
  BsLinkedinP,
  BsGithubP,
} from "./styles";

export function Footer() {
  return (
    <Container>
      <AuthorSignature>Developed by William</AuthorSignature>
      <Contacts>
        <HiOutlineMailP size={44} />
        <BsLinkedinP size={39} />
        <BsGithubP size={40} />
      </Contacts>
    </Container>
  );
}
