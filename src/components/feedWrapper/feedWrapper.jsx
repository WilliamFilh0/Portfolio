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

export function FeedWrapper({ isOpenFeed, setOpenModalFeed }) {
  if (isOpenFeed) {
    return (
      <>
        <Center>
          <WrapperContainer>
            <WrapperImage />

            <WrappedProjectInfo>
              <IoMdCloseP size={"1.6rem"} onClick={setOpenModalFeed} />
              <Title>Feed</Title>

              <TextDescription>
                Este projeto é um protótipo de feed interativo, desenvolvido com
                TypeScript, React, CSS Modules, Phosphor React, Date-fns e Vite.
                Ele permite criar, postar e excluir comentários, com a
                possibilidade de incluir qualquer conteúdo e links nos
                comentários. Os usuários podem curtir os comentários, e os
                perfis dos usuários são fixos. O objetivo é oferecer uma
                experiência de feed social dinâmica e rica em funcionalidades.
              </TextDescription>

              <TechnologiesCenter>
                <TechnologiesLarge>TypeScript</TechnologiesLarge>
                <TechnologiesSmall>React</TechnologiesSmall>
                <TechnologiesExtraLarge>CSS Modules</TechnologiesExtraLarge>
                <TechnologiesExtraLarge>Phosphor React</TechnologiesExtraLarge>
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
