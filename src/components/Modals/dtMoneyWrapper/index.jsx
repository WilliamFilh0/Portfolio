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

export function DtMoneyWrapper() {
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
                <Title>Dt Money</Title>

                <TextDescription>
                  O dt-money é uma aplicação web de controle financeiro que
                  permite gerenciar entradas e saídas, visualizar e categorizar
                  transações, calcular o saldo total e aplicar filtros. A
                  aplicação conta com um modal intuitivo para criar novas
                  transações e usa JSON Server no back-end para armazenar dados
                  de forma rápida e eficiente.
                </TextDescription>

                <TechnologiesCenter>
                  <TechnologiesLarge>TypeScript</TechnologiesLarge>
                  <TechnologiesSmall>React</TechnologiesSmall>
                  <TechnologiesExtraLarge>
                    Styled-components
                  </TechnologiesExtraLarge>
                  <TechnologiesLarge>Radix UI</TechnologiesLarge>

                  <TechnologiesLarge>Hook Form</TechnologiesLarge>
                  <TechnologiesSmall>Vite</TechnologiesSmall>
                  <TechnologiesSmall>Axios</TechnologiesSmall>
                  <TechnologiesSmall>Zod</TechnologiesSmall>
                  <TechnologiesExtraLarge>
                    Context Selector{" "}
                  </TechnologiesExtraLarge>
                </TechnologiesCenter>

                <CodeLinkContainer>
                  <a
                    href="https://github.com/WilliamFilh0/dt-money"
                    target="_blank"
                  >
                    <ViewProjectCodeButton>
                      <BsGithubP size={25} />
                      {/* <TextButton>View on GitHub</TextButton> */}
                    </ViewProjectCodeButton>
                  </a>

                  {/* <a href="https://feed-ts-eight.vercel.app/" target="_blank">
                    <ViewProjectCodeButton>
                      <FaExternalLinkAltP size={20} />
                    </ViewProjectCodeButton>
                  </a> */}
                </CodeLinkContainer>
              </WrappedProjectInfo>
            </WrapperContainer>
          </Center>
        </DialogContent>
      </DialogPortal>
    </>
  );
}