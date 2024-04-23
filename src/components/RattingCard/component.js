import { Box, Typography, styled } from "@mui/material";

export const ImageContainer = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "440px",
}));

export const RatingContainer = styled(Box)(({ theme }) => ({
  padding: "10px 0px 10px 20px",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 20,
}));
