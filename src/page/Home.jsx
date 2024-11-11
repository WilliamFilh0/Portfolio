import React, { useEffect, useState } from "react";

import { Header } from "../components/Header/index";
import { TechnologiesIcons } from "../components/technologiesIcons/index";
import { Projects } from "../components/Projects/index";
import { Profile } from "../components/Profile/index";
import { Contact } from "../components/Contact/index";
import { Footer } from "../components/Footer/index";
import { ContactArea } from "../components/ContactArea/index";
import { ScrollTopButton } from "../components/ScrollTopButton/index";
import { MenuMobile } from "../components/MenuMobile/index";

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
  const [showButton, setShowButton] = useState(false);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  return (
    <>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <FullHeightContainer id="About">
        <CenteredContainer>
          <ProfileSection>
            <Profile />

            <AboutMe>
              <ContactContainer>
                <Contact />
              </ContactContainer>
              <AboutTitle>Sobre Mim</AboutTitle>
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
      <TechnologiesIcons id="Skills" />
      <Projects id="Projects" />
      <ContactArea id="Contact" />
      {showButton && <ScrollTopButton id="About" />}
      <Footer />
    </>
  );
}
