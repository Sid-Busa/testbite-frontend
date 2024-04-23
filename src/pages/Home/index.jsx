import React from "react";
import Card from "../../components/RattingCard";
import { Grid } from "@mui/material";
import { HomeContainer } from "./component";
import { TopData } from "./data";
import Aboutus from "../Aboutus";
import CuratedCollections from "./Curatedcollections";
import Recipes from "./Recipes";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Grid container spacing={2}>
          {TopData.map(({ id, ratting, image, title }) => (
            <Grid item md={4} lg={4}>
              <Card key={id} ratting={ratting} image={image} title={title} />
            </Grid>
          ))}
        </Grid>
      </HomeContainer>
      <Aboutus />
      <CuratedCollections />
      <Recipes />
    </>
  );
};

export default Home;
