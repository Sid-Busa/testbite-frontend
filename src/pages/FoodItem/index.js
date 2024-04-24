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
import { useLocation } from "react-router-dom";

const FoodItem = () => {
  const { state } = useLocation();

  return (
    <FoodItemContainer>
      <ImageContainer
        src={`${process.env.REACT_APP_BASE_URL}assets/${state.image}`}
      />
      <Title> {state.name} </Title>

      <RecipesInfo>
        <RecipesTitle> Recipes </RecipesTitle>
        <Info> Here's a simple recipe for {state.name}: </Info>
        <SubTitle>Ingredients :</SubTitle>

        <List>
          {state.ingredients.map((ingredient) => (
            <ListItem> {ingredient}</ListItem>
          ))}
        </List>

        <SubTitle>Instructions :</SubTitle>

        <NumberList>
          {state.instructions.map((instruction) => (
            <NumberListItem> {instruction}</NumberListItem>
          ))}
        </NumberList>

        <HappyMessage>Enjoy your delicious {state.name}!</HappyMessage>
      </RecipesInfo>
    </FoodItemContainer>
  );
};

export default FoodItem;
