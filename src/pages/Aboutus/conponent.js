import { Box, Grid, Typography, Button, styled } from "@mui/material";

export const AboutContainer = styled(Grid)(({ theme }) => ({
  margin: "0px",
  padding: "50px 8%",
  boxShadow: "0px 0px 40px 5px rgba(0, 0, 0, 0.06)",
  display: "flex",
  alignItems: "center",
  gap: "30px",
  [theme.breakpoints.down(992)]: {
    flexDirection: "column",
    gap: 10,
  },
}));

export const AboutImageContainer = styled(Box)(({ theme }) => ({
  width: "40%",
  [theme.breakpoints.down(992)]: {
    width: "100%",
  },
}));
export const AboutInfoContainer = styled(Box)(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down(992)]: {
    width: "100%",
  },
}));

export const Image = styled("img")(({ theme }) => ({
  height: "500px",
  width: "100%",
  objectFit: "cover",
}));

export const CustomTypography = styled(Typography)(({ theme }) => ({
  fontSize: 30,
  fontWeight: 600,
}));

export const AddressTypography = styled(Typography)(({ theme }) => ({
  color: "#556070",
  fontSize: 18,
  margin: "20px 0px",
}));

export const ReadMore = styled(Button)(({ theme }) => ({
  marginTop: 10,
  backgroundColor: "#000",
  color: "white",
  padding: "10px 20px",

  ":hover": {
    backgroundColor: "#000",
  },
}));
