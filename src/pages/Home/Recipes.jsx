import React from "react";
import { FreshRecipesTitle, RecipesContainer, Title } from "./component";
import { Grid } from "@mui/material";
import LatestRecipesCard from "../../components/LatestRecipesCard";
import FastRecipesCard from "../../components/FreshRecipesCard";

const Recipes = ({ latestData, freshData, hanldeToMoveItemDetail }) => {
  const handleToClickItem = (item) => {
    hanldeToMoveItemDetail(item);
  };

  return (
    <RecipesContainer container spacing={3}>
      <Grid item md={8} lg={8}>
        <Title>Latest Recipes</Title>
        {latestData.map((item) => (
          <LatestRecipesCard
            key={item._id}
            title={item.name}
            image={`${process.env.REACT_APP_BASE_URL}assets/${item.image}`}
            description={item.description}
            creatorName={item.creator}
            handleToClickItem={() => handleToClickItem(item)}
          />
        ))}
      </Grid>
      <Grid item md={4} lg={4}>
        <FreshRecipesTitle>Fresh Recipes</FreshRecipesTitle>
        <Grid container spacing={3}>
          {freshData.map((freshDataItem) => (
            <Grid
              key={freshDataItem._id}
              item
              sm={6}
              md={12}
              lg={12}
              width={"100%"}
            >
              <FastRecipesCard
                image={`${process.env.REACT_APP_BASE_URL}assets/${freshDataItem.image}`}
                title={freshDataItem.name}
                handleToClickItem={() => handleToClickItem(freshDataItem)}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </RecipesContainer>
  );
};

export default Recipes;
