import React from "react";
import { FastRecipesCardContainer, ImageContainer, Title } from "./components";

import Pumpkin from "../../assets/images/pumpkin-marshmallow.jpeg";
// pumpkin-marshmallow.jpeg
const FastRecipesCard = () => {
  return (
    <FastRecipesCardContainer>
      <ImageContainer src={Pumpkin} alt="Pumpkin" />
      <Title> Pumpkin marshmallow pie </Title>
    </FastRecipesCardContainer>
  );
};

export default FastRecipesCard;
