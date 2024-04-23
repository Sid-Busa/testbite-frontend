import { styled, Box, Typography, Grid } from "@mui/material";

export const HomeContainer = styled(Box)(({ theme }) => ({
  padding: "50px 8%",
}));

export const CuratedcollectionsContainer = styled(Box)(({ theme }) => ({
  padding: "50px 8%",
  backgroundColor: "#F9F9F9",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 30,
  fontWeight: 600,
  marginBottom: 40,
}));
export const FreshRecipesTitle = styled(Typography)(({ theme }) => ({
  fontSize: 30,
  fontWeight: 600,
  marginBottom: 40,

  [theme.breakpoints.down(800)]: {
    marginTop: 40,
  },
}));

export const RecipesContainer = styled(Grid)(({ theme }) => ({
  padding: "50px 8%",
  backgroundColor: "#FFF",
}));
