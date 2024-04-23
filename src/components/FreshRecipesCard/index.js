import React from "react";
import { FastRecipesCardContainer, ImageContainer, Title } from "./components";

const FastRecipesCard = ({ image, title, handleToClickItem }) => {
  return (
    <FastRecipesCardContainer onClick={handleToClickItem}>
      <ImageContainer src={image} alt="Pumpkin" />
      <Title> {title} </Title>
    </FastRecipesCardContainer>
  );
};

export default FastRecipesCard;
