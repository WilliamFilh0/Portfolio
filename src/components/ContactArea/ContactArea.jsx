import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

import {
  ContactAreaTitle,
  ContactSectionContainer,
  ContactMessage,
  ContactButtonContainer,
  ButtonContact,
  CopyButton,
} from "./styles";

export function ContactArea() {
  const [email, setEmail] = useState("williamaraujodev@gmail.com");

  function handleCopyClick() {
    navigator.clipboard.writeText(email);
    alert("O email foi copiado com sucesso");
  }

  return (
    <>
      <ContactSectionContainer>
        <ContactAreaTitle>Contatos</ContactAreaTitle>
        <ContactMessage>
          Estou aberto a novas oportunidades profissionais.
        </ContactMessage>
        <ContactMessage>
          Entre em contato pelas plataformas abaixo para discutir como posso
          contribuir para o seu time!
        </ContactMessage>

        <ContactButtonContainer>
          <a
            href="https://www.linkedin.com/in/william-filho-23363a26b/"
            target="_blank"
          >
            <ButtonContact>
              <BsLinkedin /> Linkedin
            </ButtonContact>
          </a>

          <a href="mailto:williamaraujodev@gmail.com" target="_blank">
            <ButtonContact>
              <HiOutlineMail /> Email
            </ButtonContact>
          </a>

          <a href="https://github.com/WilliamFilh0" target="_blank">
            <ButtonContact>
              <SiGithub /> Github
            </ButtonContact>
          </a>
        </ContactButtonContainer>

        <ContactMessage>
          Clique no botão abaixo para copiar o Email
        </ContactMessage>
        <CopyButton onClick={handleCopyClick}>Copiar</CopyButton>
      </ContactSectionContainer>
    </>
  );
}
