import { Box, Button, Typography, styled } from "@mui/material";

export const ImageContainer = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "200px",
  width: "100%",
}));

export const ReceiptCardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  cursor: "pointer",
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 600,
  fontSize: 24,
  margin: "10px 0px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  minHeight: 72,
}));

export const RecipesButton = styled(Button)(({ theme }) => ({
  color: "#E50000",
  padding: "10px 20px",
  borderRadius: 3,
  border: "1px solid rgba(229, 0, 0, 0.18)",
  marginBottom: 20,
}));
