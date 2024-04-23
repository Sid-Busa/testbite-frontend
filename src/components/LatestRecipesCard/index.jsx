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

const LatestRecipesCard = ({
  title,
  image,
  description,
  creatorName,
  handleToClickItem,
}) => {
  return (
    <LatestRecipesCardContainer onClick={handleToClickItem}>
      <ImageContainer src={image} alt={title} />
      <DescriptionSection>
        <DescriptionTitle> {title} </DescriptionTitle>
        <Description>{description}</Description>
      </DescriptionSection>

      <CreatorContainer>
        <CreatorAvatarContainer>
          <Avatar>D</Avatar>
          <CreatorName> {creatorName} </CreatorName>
        </CreatorAvatarContainer>
        <CreatorDay>yesterday</CreatorDay>
      </CreatorContainer>
    </LatestRecipesCardContainer>
  );
};

export default LatestRecipesCard;
