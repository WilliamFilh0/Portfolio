import React from "react";

import { Header } from "../components/Header/Header";
import { TechnologiesIcons } from "../components/technologiesIcons/technologiesIcons";
import { Projects } from "../components/Projects/projects";
import { Profile } from "../components/Profile";
import { Contact } from "../components/Contact/Contact";
import { Footer } from "../components/Footer/Footer";
import { ContactArea } from "../components/ContactArea/ContactArea";

import {
  AboutMe,
  ProfileSection,
  CenteredContainer,
  NameTitle,
  RoleTitle,
  AboutTitle,
  ProfileDescription,
  FullHeightContainer,
  ContactContainer,
} from "./styles";

export function Page() {
  return (
    <>
      <Header />
      <FullHeightContainer>
        <CenteredContainer>
          <ProfileSection>
            <Profile />

            <AboutMe>
              <ContactContainer>
                <Contact />
              </ContactContainer>
              <AboutTitle>Quem sou</AboutTitle>
              <NameTitle>William Araújo</NameTitle>
              <RoleTitle>Front-End Developer</RoleTitle>
              <ProfileDescription>
                Sou desenvolvedor Front-End e tenho foco em criar interfaces
                atraentes e dinâmicas que proporcionem experiencias cativantes
                aos usuários. Estou constantemente buscando desafios para
                aprimorar minhas habilidades e expandir as minhas experiências.
                Comprometido em acompanhar as últimas tendências e tecnologias
                que possam elevar a qualidade dos meus projetos.
              </ProfileDescription>
            </AboutMe>
          </ProfileSection>
        </CenteredContainer>
      </FullHeightContainer>
      <TechnologiesIcons />
      <Projects />

      <ContactArea />

      <Footer />
    </>
  );
}
