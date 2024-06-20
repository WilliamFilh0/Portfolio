import React, { useState } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { BsLinkedin } from "react-icons/bs";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
  ContactAreaTitle,
  ContactSectionContainer,
  ContactMessage,
  ContactButtonContainer,
  ButtonContact,
  CopyButton,
} from "./styles";

export function ContactArea({ id }) {
  const [email, setEmail] = useState("williamaraujodev@gmail.com");

  const notify = () =>
    toast.success("Email copiado com sucesso !!!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  function handleCopyClick() {
    navigator.clipboard.writeText(email);
    notify();
  }

  return (
    <>
      <ContactSectionContainer id={id}>
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
              <BsLinkedin size={"0.813rem"} /> Linkedin
            </ButtonContact>
          </a>

          <a href="mailto:williamaraujodev@gmail.com" target="_blank">
            <ButtonContact>
              <HiOutlineMail size={"1rem"} /> Email
            </ButtonContact>
          </a>

          {/* <a href="https://github.com/WilliamFilh0" target="_blank">
            <ButtonContact>
              <SiGithub /> Github
            </ButtonContact>
          </a> */}
        </ContactButtonContainer>

        <ContactMessage>
          Clique no botão abaixo para copiar automaticamente meu email
        </ContactMessage>
        <CopyButton onClick={handleCopyClick}>Copiar</CopyButton>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ContactSectionContainer>
    </>
  );
}
