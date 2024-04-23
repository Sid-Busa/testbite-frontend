import { styled, Box } from "@mui/material";

export const LayoutContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
}));

export const MainContainer = styled(Box)(() => ({
  flex: 1,
}));
