import { Box, Typography, styled } from "@mui/material";

export const ImageContainer = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "200px",
  width: "100%",
  objectFit: "cover",
  [theme.breakpoints.down(800)]: {
    height: "200px",
  },
}));

export const FastRecipesCardContainer = styled(Box)(({ theme }) => ({
  cursor: "pointer",
}));

export const Title = styled(Typography)(({ theme }) => ({
  padding: "10px 5px",
  fontSize: 18,

  fontWeight: 500,
}));
