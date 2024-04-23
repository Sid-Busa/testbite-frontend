import React from "react";
import {
  CreatorAvatarContainer,
  CreatorContainer,
  CreatorDay,
  CreatorName,
  Description,
  DescriptionSection,
  DescriptionTitle,
  ImageContainer,
  LatestRecipesCardContainer,
} from "./components";
import Avatar from "@mui/material/Avatar";

import Pumpkin from "../../assets/images/pumpkin-marshmallow.jpeg";
// pumpkin-marshmallow.jpeg
const LatestRecipesCard = () => {
  return (
    <LatestRecipesCardContainer>
      <ImageContainer src={Pumpkin} alt="Pumpkin" />
      <DescriptionSection>
        <DescriptionTitle> Pumpkin marshmallow pie </DescriptionTitle>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </Description>
      </DescriptionSection>

      <CreatorContainer>
        <CreatorAvatarContainer>
          <Avatar>D</Avatar>
          <CreatorName> John Doe </CreatorName>
        </CreatorAvatarContainer>
        <CreatorDay>yesterday</CreatorDay>
      </CreatorContainer>
    </LatestRecipesCardContainer>
  );
};

export default LatestRecipesCard;
