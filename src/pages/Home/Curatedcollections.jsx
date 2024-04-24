import React from "react";
import { CuratedcollectionsContainer, Title } from "./component";
import ReceiptCard from "../../components/ReceiptCard";
import { Grid } from "@mui/material";

const Curatedcollections = ({
  data,
  hanldeToMoveItemDetail = { hanldeToMoveItemDetail },
}) => {
  const handleToClickItem = (item) => {
    hanldeToMoveItemDetail(item);
  };
  return (
    <CuratedcollectionsContainer>
      <Title> Curated Collections </Title>
      <Grid container spacing={2} alignItems={"center"}>
        {data.map((itemInfo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={itemInfo._id}>
            <ReceiptCard
              title={itemInfo.name}
              image={`${process.env.REACT_APP_BASE_URL}assets/${itemInfo.image}`}
              handleToClickItem={() => handleToClickItem(itemInfo)}
            />
          </Grid>
        ))}
      </Grid>
    </CuratedcollectionsContainer>
  );
};

export default Curatedcollections;
