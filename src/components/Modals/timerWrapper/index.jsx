import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogOverlay,
} from "@radix-ui/react-dialog";

import {
  Center,
  WrapperContainer,
  IoMdCloseP,
  WrapperImage,
  WrappedProjectInfo,
  Title,
  TextDescription,
  TechnologiesCenter,
  TechnologiesSmall,
  TechnologiesMedium,
  TechnologiesLarge,
  TechnologiesExtraLarge,
  TechnologiesMediumLarge,
  CodeLinkContainer,
  ViewProjectCodeButton,
  TextButton,
  FaExternalLinkAltP,
  BsGithubP,
} from "./styles";

export function TimerWrapper() {
  return (
    <>
      <DialogPortal>
        <DialogOverlay />

        <DialogContent>
          <Center>
            <WrapperContainer>
              <WrapperImage />

              <WrappedProjectInfo>
                <DialogClose asChild>
                  <IoMdCloseP size={"1.6rem"} />
                </DialogClose>
                <Title>Timer</Title>

                <TextDescription>
                  Este projeto é uma aplicação web de gerenciamento de ciclos,
                  desenvolvida com TypeScript, React, Vite e outras tecnologias.
                  A aplicação funciona como um temporizador para tarefas,
                  permitindo aos usuários gerenciar seu tempo de forma
                  eficiente. Os usuários podem iniciar, interromper e concluir
                  ciclos de tarefas, além de visualizar o histórico de suas
                  atividades.
                </TextDescription>

                <TechnologiesCenter>
                  <TechnologiesLarge>TypeScript</TechnologiesLarge>
                  <TechnologiesSmall>React</TechnologiesSmall>
                  <TechnologiesExtraLarge>
                    Styled-components
                  </TechnologiesExtraLarge>
                  <TechnologiesExtraLarge>
                    React Hook Form{" "}
                  </TechnologiesExtraLarge>
                  <TechnologiesExtraLarge>
                    Phosphor React
                  </TechnologiesExtraLarge>
                  <TechnologiesLarge>Date-fns</TechnologiesLarge>
                  <TechnologiesSmall>Immer </TechnologiesSmall>
                  <TechnologiesSmall>Zod</TechnologiesSmall>
                  <TechnologiesSmall>Vite</TechnologiesSmall>
                </TechnologiesCenter>

                <CodeLinkContainer>
                  <a
                    href="https://github.com/WilliamFilh0/Timer-ts"
                    target="_blank"
                  >
                    <ViewProjectCodeButton>
                      <BsGithubP size={25} />
                      {/* <TextButton>View on GitHub</TextButton> */}
                    </ViewProjectCodeButton>
                  </a>

                  <a href="https://timer-ts-02.vercel.app/" target="_blank">
                    <ViewProjectCodeButton>
                      <FaExternalLinkAltP size={20} />
                    </ViewProjectCodeButton>
                  </a>
                </CodeLinkContainer>
              </WrappedProjectInfo>
            </WrapperContainer>
          </Center>
        </DialogContent>
      </DialogPortal>
    </>
  );
}
