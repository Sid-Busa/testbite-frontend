import React from "react";
import Card from "../../components/RattingCard";
import { Grid } from "@mui/material";
import { HomeContainer } from "./component";

const RattingCards = ({ data, hanldeToUpdateRatting }) => {
  return (
    <HomeContainer>
      <Grid container spacing={2}>
        {data.map((itemInfo) => (
          <Grid item md={4} lg={4} key={itemInfo._id}>
            <Card
              ratting={itemInfo.rating}
              image={`${process.env.REACT_APP_BASE_URL}assets/${itemInfo.image}`}
              title={itemInfo.name}
              hanldeToUpdateRatting={(ratting) =>
                hanldeToUpdateRatting(itemInfo, ratting)
              }
            />
          </Grid>
        ))}
      </Grid>
    </HomeContainer>
  );
};

export default RattingCards;
