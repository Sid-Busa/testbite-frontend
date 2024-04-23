import { Box, Typography, styled } from "@mui/material";

export const ImageContainer = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "400px",
  width: "100%",
  objectFit: "cover",
  [theme.breakpoints.down(800)]: {
    height: "200px",
  },
}));

export const LatestRecipesCardContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  border: "1px solid #E1E1E1",
  marginBottom: 25,
  cursor: "pointer",
}));

export const DescriptionSection = styled(Box)(({ theme }) => ({
  padding: "15px 25px",
}));

export const DescriptionTitle = styled(Typography)(({ theme }) => ({
  fontSize: 20,
  marginBottom: 15,
  fontWeight: 600,
}));

export const Description = styled(Typography)(({ theme }) => ({
  color: "#556070",
  fontSize: 16,
  marginBottom: 15,
}));

export const CreatorContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 25px 20px",
  alignItems: "center",
}));

export const CreatorAvatarContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: 10,
  alignItems: "center",
}));

export const CreatorName = styled(Typography)(({ theme }) => ({}));

export const CreatorDay = styled(Typography)(({ theme }) => ({
  color: "#868686",
  fontSize: 16,
  fontWeight: 400,
  textTransform: "capitalize",
}));
