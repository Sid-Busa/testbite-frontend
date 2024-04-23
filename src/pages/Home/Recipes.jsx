import React from "react";
import { FreshRecipesTitle, RecipesContainer, Title } from "./component";
import { Grid } from "@mui/material";
import LatestRecipesCard from "../../components/LatestRecipesCard";
import FastRecipesCard from "../../components/FreshRecipesCard";

const Recipes = () => {
  return (
    <RecipesContainer container spacing={3}>
      <Grid item md={8} lg={8}>
        <Title>Latest Recipes</Title>
        <LatestRecipesCard />
        <LatestRecipesCard />
      </Grid>
      <Grid item md={4} lg={4}>
        <FreshRecipesTitle>Fresh Recipes</FreshRecipesTitle>
        <Grid container spacing={3}>
          <Grid item sm={6} md={12} lg={12} width={"100%"}>
            <FastRecipesCard />
          </Grid>
          <Grid item sm={6} md={12} lg={12} width={"100%"}>
            <FastRecipesCard />
          </Grid>
          <Grid item sm={6} md={12} lg={12} width={"100%"}>
            <FastRecipesCard />
          </Grid>
          <Grid item sm={6} md={12} lg={12} width={"100%"}>
            <FastRecipesCard />
          </Grid>
        </Grid>
      </Grid>
    </RecipesContainer>
  );
};

export default Recipes;
