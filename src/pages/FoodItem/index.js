import React from "react";
import {
  FoodItemContainer,
  HappyMessage,
  ImageContainer,
  Info,
  List,
  ListItem,
  NumberList,
  NumberListItem,
  RecipesInfo,
  RecipesTitle,
  SubTitle,
  Title,
} from "./component";
import PumpkinMarshmallow from "../../assets/images/pumpkin-marshmallow.jpeg";

const FoodItem = () => {
  return (
    <FoodItemContainer>
      <ImageContainer src={PumpkinMarshmallow} />
      <Title> Pumpkin marshmallow pie </Title>

      <RecipesInfo>
        <RecipesTitle> Recipes </RecipesTitle>
        <Info> Here's a simple recipe for Pumpkin Marshmallow Pie: </Info>
        <SubTitle>Ingredients :</SubTitle>

        <List>
          <ListItem> Single-line item</ListItem>
          <ListItem> Single-line item</ListItem>
          <ListItem> Single-line item</ListItem>
        </List>

        <SubTitle>Instructions :</SubTitle>

        <NumberList>
          <NumberListItem> Single-line item</NumberListItem>
          <NumberListItem> Single-line item</NumberListItem>
          <NumberListItem> Single-line item</NumberListItem>
        </NumberList>

        <HappyMessage>
          Enjoy your delicious Pumpkin Marshmallow Pie!
        </HappyMessage>
      </RecipesInfo>
    </FoodItemContainer>
  );
};

export default FoodItem;
