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
      <AuthorSignature>Feito por William</AuthorSignature>
      <Contacts>
        <HiOutlineMailP size={44} />
        <BsTelephoneP size={38} />
        <BsLinkedinP size={39} />
        <BsGithubP size={40} />
      </Contacts>
    </Container>
  );
}
