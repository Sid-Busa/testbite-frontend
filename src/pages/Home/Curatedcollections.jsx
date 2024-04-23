import React from "react";
import { CuratedcollectionsContainer, Title } from "./component";
import { CuratedData } from "./data";
import ReceiptCard from "../../components/ReceiptCard";
import { Grid } from "@mui/material";

const Curatedcollections = () => {
  return (
    <CuratedcollectionsContainer>
      <Title> Curated Collections </Title>
      <Grid container spacing={2} alignItems={"center"}>
        {CuratedData.map(({ title, image }) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <ReceiptCard key={title} title={title} image={image} />
          </Grid>
        ))}
      </Grid>
    </CuratedcollectionsContainer>
  );
};

export default Curatedcollections;
