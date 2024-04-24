import { Box } from "@mui/material";
import React from "react";
import {
  ImageContainer,
  ReceiptCardContainer,
  RecipesButton,
  Title,
} from "./component";

const ReceiptCard = ({ title, image, handleToClickItem }) => {
  return (
    <ReceiptCardContainer onClick={handleToClickItem}>
      <Box sx={{ textAlign: "center" }}>
        <ImageContainer alt={title} src={image} />
      </Box>
      <Box>
        <Title> {title} </Title>
      </Box>
      <RecipesButton>150 Recipes</RecipesButton>
    </ReceiptCardContainer>
  );
};

export default ReceiptCard;
