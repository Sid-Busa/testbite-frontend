import {
  AppBar,
  Button,
  Toolbar,
  styled,
  Box,
  IconButton,
  Drawer,
} from "@mui/material";

export const CustomAppBar = styled(AppBar)(() => ({
  backgroundColor: "#FFF",
  color: "#000",
  boxShadow: "0px 4px 10px 5px rgba(232, 232, 232, 0.25)",
}));

export const CustomToolbar = styled(Toolbar)(() => ({
  margin: "0% 8%",
  padding: "15px 0px !important",
}));

export const Logo = styled("img")(({ theme }) => ({
  width: 150,
  cursor: "pointer",
  [theme.breakpoints.down(768)]: {
    width: 100,
  },
}));

export const HamburgunIcon = styled(IconButton)(({ theme }) => ({
  fontSize: "20px !important",
  display: "none",
  [theme.breakpoints.down(768)]: {
    display: "block",
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
  [theme.breakpoints.down(768)]: {
    display: "none",
  },
}));

export const NavItem = styled(Button)(() => ({
  color: "black",
  fontWeight: 600,
  textTransform: "none",
  fontSize: 16,
}));

export const NavButton = styled(Button)(() => ({
  color: "white",
  backgroundColor: "#373737",
  borderRadius: 4,
  fontWeight: 600,
  padding: "5px 20px",
  fontSize: 16,
  textTransform: "none",

  ":hover": {
    backgroundColor: "#191919",
  },
}));

export const CustomDrawer = styled(Drawer)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.down(768)]: {
    display: "block",
  },
}));

export const CustomCloseIconContainer = styled(Box)(({ theme }) => ({
  textAlign: "end",
  padding: "8px 16px 0px ",
}));
