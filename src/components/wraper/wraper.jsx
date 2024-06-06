import React from "react";
import {
  Center,
  WrapperContainer,
  WrapperImage,
  WrappedProjectInfo,
  Title,
  TextDescription,
  Technologies,
  CodeLinkContainer,
  ViewProjectCodeButton,
  TextButton,
  FaExternalLinkAltP,
  BsGithubP,
  IoMdCloseP,
} from "./styles";

export function Wrapper({ isOpen, setModalOpen }) {
  if (isOpen) {
    return (
      <>
        <Center>
          <WrapperContainer>
            <WrapperImage />

            <WrappedProjectInfo>
              <IoMdCloseP size={"1.6rem"} onClick={setModalOpen} />
              <Title>RocketNotes</Title>

              <TextDescription>
                O Rocketnotes é uma aplicação web com React (front-end) e
                Node.js (back-end), utilizando uma API REST para o gerenciamento
                completo de notas, incluindo criação, leitura, atualização e
                exclusão (CRUD). A autenticação de usuários proporciona a
                flexibilidade de criar e atualizar vários perfis. Além disso, os
                dados são armazenados de maneira segura no SQLite.
              </TextDescription>

              <Technologies>React</Technologies>

              <CodeLinkContainer>
                <a
                  href="https://github.com/WilliamFilh0/RocketNotes_React"
                  target="_blank"
                >
                  <ViewProjectCodeButton>
                    <BsGithubP size={25} />
                    {/* <TextButton>View on GitHub</TextButton> */}
                  </ViewProjectCodeButton>
                </a>

                <a href="">
                  <ViewProjectCodeButton>
                    <FaExternalLinkAltP size={20} />
                  </ViewProjectCodeButton>
                </a>
              </CodeLinkContainer>
            </WrappedProjectInfo>
          </WrapperContainer>
        </Center>
      </>
    );
  } else {
    return null;
  }
}
