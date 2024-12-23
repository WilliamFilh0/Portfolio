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

export function FeedWrapper() {
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
                <Title>Feed</Title>

                <TextDescription>
                  Este projeto é um protótipo de feed interativo desenvolvido
                  com TypeScript, React, CSS Modules, Phosphor React, Date-fns e
                  Vite. Permite criar, postar e excluir comentários, com a
                  possibilidade de incluir qualquer conteúdo e links nos
                  comentários. Os usuários podem curtir comentários, e os perfis
                  são fixos, proporcionando uma experiência de feed social
                  dinâmica e funcional.
                </TextDescription>

                <TechnologiesCenter>
                  <TechnologiesLarge>TypeScript</TechnologiesLarge>
                  <TechnologiesSmall>React</TechnologiesSmall>
                  <TechnologiesMediumLarge>CSS Modules</TechnologiesMediumLarge>
                  <TechnologiesExtraLarge>
                    Phosphor Icons
                  </TechnologiesExtraLarge>
                  <TechnologiesLarge>Date-fns</TechnologiesLarge>
                  <TechnologiesSmall>Vite</TechnologiesSmall>
                </TechnologiesCenter>

                <CodeLinkContainer>
                  <a
                    href="https://github.com/WilliamFilh0/feed-ts"
                    target="_blank"
                  >
                    <ViewProjectCodeButton>
                      <BsGithubP size={25} />
                      {/* <TextButton>View on GitHub</TextButton> */}
                    </ViewProjectCodeButton>
                  </a>

                  <a href="https://feed-ts-eight.vercel.app/" target="_blank">
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
