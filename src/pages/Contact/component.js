import { Button, styled, Box, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const Container = styled(Box)(({ theme }) => ({
  position: "relative",
  padding: "0px 8%",
  marginTop: "100px",
  marginBottom: "100px",
  [theme.breakpoints.down(992)]: {
    marginTop: "30px",
    marginBottom: "30px",
  },
}));

export const FormContainer = styled(Box)(() => ({}));

export const Title = styled(Typography)(({ theme }) => ({
  fontSize: 30,
  color: "#03337B",
  fontWeight: 600,
  [theme.breakpoints.down(600)]: {
    fontSize: 24,
  },
}));

export const InfoMessage = styled(Typography)(({ theme }) => ({
  fontSize: 18,
  color: "#87909D",
  fontWeight: 400,
  [theme.breakpoints.down(600)]: {
    fontSize: 14,
  },
}));

export const Line = styled("hr")(({ theme }) => ({
  border: "2px solid #E50000",
  width: 330,
  //   margin: "inherit",
  margin: "15px 0px",
  borderRadius: 10,
  [theme.breakpoints.down(600)]: {
    width: "100%",
  },
}));

export const ImageContainer = styled(Box)(() => ({
  position: "absolute",
  right: 0,
  top: 0,
}));

export const Image = styled("img")(({ theme }) => ({
  borderTopLeftRadius: "80px",
  borderBottomLeftRadius: "80px",
  height: 450,
  width: 650,
  objectFit: "cover",
  [theme.breakpoints.down(1300)]: {
    width: 500,
  },
  [theme.breakpoints.down(1120)]: {
    display: "none",
  },
}));

export const Form = styled("form")(({ theme }) => ({
  marginTop: 30,
  width: 500,
  [theme.breakpoints.down(1120)]: {
    width: "100%",
  },
}));

export const FormInputContainer = styled(Box)(() => ({
  marginBottom: 5,
}));

export const SubmitButton = styled(Button)(() => ({
  marginTop: 15,
  backgroundColor: "#000",
  borderRadius: 4,
  color: "#fff",
  padding: "12px 24px",
  ":hover": {
    backgroundColor: "#191919",
  },
}));

export const CustomSendIcon = styled(SendIcon)(() => ({
  marginLeft: 10,
}));
