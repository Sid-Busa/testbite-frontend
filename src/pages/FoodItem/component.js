import { Box, Typography, styled } from "@mui/material";

export const FoodItemContainer = styled(Box)(({ theme }) => ({
  padding: "0% 8%",
  marginBottom: 40,
  marginTop: 40,
}));

export const ImageContainer = styled("img")(({ theme }) => ({
  maxWidth: "100%",
  height: "400px",
  width: "100%",
  objectFit: "cover",
  [theme.breakpoints.down(800)]: {
    height: "200px",
  },
}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 36,
  fontWeight: 600,
  marginTop: 30,
  marginBottom: 30,
  textTransform: "capitalize",
  [theme.breakpoints.down(800)]: {
    fontSize: 24,
  },
}));

export const RecipesInfo = styled(Box)(({ theme }) => ({
  backgroundColor: "#F9F9F9",
  padding: "50px",
  [theme.breakpoints.down(800)]: {
    padding: "30px 20px",
  },
}));

export const RecipesTitle = styled(Box)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "24px",
  padding: "0px 0px 30px 15px",
  [theme.breakpoints.down(800)]: {
    fontSize: 22,
  },
}));

export const Info = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  paddingBottom: "30px",
  fontWeight: 400,
}));

export const SubTitle = styled(Typography)(({ theme }) => ({
  fontSize: "18px",
  //   paddingBottom: "20px",
  fontWeight: 400,
}));

export const List = styled("ul")(({ theme }) => ({
  listStyleType: "none",
  paddingLeft: 0,
  marginBottom: 40,
}));

export const ListItem = styled("li")(({ theme }) => ({
  marginBottom: 10,

  "&::before": {
    content: '"-  "',
  },
}));

export const NumberList = styled("ul")(({ theme }) => ({
  listStyleType: "decimal",
  paddingLeft: 15,
  marginBottom: 40,
}));

export const NumberListItem = styled("li")(({ theme }) => ({
  marginBottom: 10,
}));

export const HappyMessage = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
}));
