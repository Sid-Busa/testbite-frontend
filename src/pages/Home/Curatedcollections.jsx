import React from "react";
import { CuratedcollectionsContainer, Title } from "./component";
import ReceiptCard from "../../components/ReceiptCard";
import { Grid } from "@mui/material";

const Curatedcollections = ({ data }) => {
  return (
    <CuratedcollectionsContainer>
      <Title> Curated Collections </Title>
      <Grid container spacing={2} alignItems={"center"}>
        {data.map((itemInfo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={itemInfo._id}>
            <ReceiptCard title={itemInfo.name} image={itemInfo.image} />
          </Grid>
        ))}
      </Grid>
    </CuratedcollectionsContainer>
  );
};

export default Curatedcollections;
