import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

import {
  H1,
  Container,
  HeaderContainer,
  ProjectFeed,
  ProjectRocketNotes,
  ProjectTimer,
  Teste2,
  Teste3,
  TexComingSoonMessagete,
  ProjectsContainer,
  ProjectDtMoney,
} from "./styles";

import { RocketWrapper } from "../Modals/rocketWrapper/index";
import { FeedWrapper } from "../Modals/feedWrapper/index";
import { DtMoneyWrapper } from "../Modals/dtMoneyWrapper/index";
import { TimerWrapper } from "../Modals/timerWrapper/index";

export function Projects({ id }) {
  return (
    <>
      <ProjectsContainer id={id}>
        <HeaderContainer>
          <H1>Projetos</H1>
        </HeaderContainer>

        <Container>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ProjectRocketNotes />
            </Dialog.Trigger>

            <RocketWrapper></RocketWrapper>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ProjectFeed />
            </Dialog.Trigger>

            <FeedWrapper></FeedWrapper>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ProjectDtMoney />
            </Dialog.Trigger>

            <DtMoneyWrapper></DtMoneyWrapper>
          </Dialog.Root>

          <Dialog.Root>
            <Dialog.Trigger asChild>
              <ProjectTimer />
            </Dialog.Trigger>

            <TimerWrapper></TimerWrapper>
          </Dialog.Root>

          <Teste2>
            {" "}
            <TexComingSoonMessagete>Em Breve</TexComingSoonMessagete>
          </Teste2>
          <Teste3>
            {" "}
            <TexComingSoonMessagete>Em Breve</TexComingSoonMessagete>
          </Teste3>
        </Container>
      </ProjectsContainer>
    </>
  );
}
