import React from "react";

import { UserProfile, Img, CenteredContainer, ImgBackground } from "./styles";
const UserProfilePhoto = new URL("../../assets/Profile.png", import.meta.url);
const background = new URL("../../assets/Backgorund.png", import.meta.url);

export function Profile() {
  return (
    <>
      <CenteredContainer>
        <UserProfile>
          <Img src={UserProfilePhoto.href} alt="Foto de Perfil" />{" "}
          <ImgBackground src={background.href} alt="Foto de Background" />{" "}
        </UserProfile>
      </CenteredContainer>
    </>
  );
}
