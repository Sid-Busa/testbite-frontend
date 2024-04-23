import { Button, styled, Box, Typography } from "@mui/material";

export const FooterContainer = styled(Box)(() => ({
  backgroundColor: "#F9F9F9",
  padding: "10px 8%",
}));

export const FooterItemContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: "20px 0px",
  [theme.breakpoints.down(600)]: {
    flexDirection: "column",
    gap: 10,
  },
}));

export const NavContainer = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  display: "flex",
  gap: 45,
  justifyContent: "end",
  [theme.breakpoints.down(992)]: {
    gap: 32,
  },
  [theme.breakpoints.down(600)]: {
    gap: 6,
  },
  [theme.breakpoints.down(370)]: {
    flexDirection: "column",
    gap: 0,
  },
}));

export const NavItem = styled(Button)(() => ({
  color: "black",
  fontWeight: 600,
  textTransform: "none",
  fontSize: 16,
}));

export const Line = styled("hr")(() => ({
  borderColor: "#bab7b740",
}));

export const CopyRightText = styled(Typography)(() => ({
  textAlign: "center",
  padding: "20px 0px",
  fontSize: 16,
  fontWeight: 400,
}));
