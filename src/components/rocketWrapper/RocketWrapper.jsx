import React from "react";
import {
  Center,
  WrapperContainer,
  WrapperImage,
  WrappedProjectInfo,
  Title,
  TextDescription,
  TechnologiesCenter,
  TechnologiesSmall,
  TechnologiesMedium,
  TechnologiesLarge,
  CodeLinkContainer,
  ViewProjectCodeButton,
  TextButton,
  FaExternalLinkAltP,
  BsGithubP,
  IoMdCloseP,
  TechnologiesExtraLarge,
} from "./styles";

export function RocketWrapper({ isOpenRocket, setOpenModalRocket }) {
  if (isOpenRocket) {
    return (
      <>
        <Center>
          <WrapperContainer>
            <WrapperImage />

            <WrappedProjectInfo>
              <IoMdCloseP size={"1.6rem"} onClick={setOpenModalRocket} />
              <Title>RocketNotes</Title>

              <TextDescription>
                O Rocketnotes é uma aplicação web com React (front-end) e
                Node.js (back-end), utilizando uma API REST para o gerenciamento
                completo de notas, incluindo criação, leitura, atualização e
                exclusão (CRUD). A autenticação de usuários proporciona a
                flexibilidade de criar e atualizar vários perfis. Além disso, os
                dados são armazenados de maneira segura no SQLite.
              </TextDescription>

              <TechnologiesCenter>
                <TechnologiesSmall>React</TechnologiesSmall>
                <TechnologiesLarge>Javascript</TechnologiesLarge>
                <TechnologiesExtraLarge>
                  Styled-components
                </TechnologiesExtraLarge>
                <TechnologiesMedium>Node.js</TechnologiesMedium>
                <TechnologiesMedium>SQLite</TechnologiesMedium>
                <TechnologiesSmall>Axios</TechnologiesSmall>
                <TechnologiesSmall>Vite</TechnologiesSmall>
              </TechnologiesCenter>

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
