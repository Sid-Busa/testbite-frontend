import { useState } from "react";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {
  CustomAppBar,
  CustomCloseIconContainer,
  CustomDrawer,
  CustomToolbar,
  HamburgunIcon,
  Logo,
  NavButton,
  NavContainer,
  NavItem,
} from "./components";
import Tastebites from "../../assets/images/Tastebites.png";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { navItems } from "../../constants";
import { useNavigate } from "react-router";
import { getFromLocalStorage } from "../../utills/storage";
const drawerWidth = 240;

const Header = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false);
  const token = getFromLocalStorage("token");
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileDrawer((prevState) => !prevState);
  };

  const handleNavigate = (path, isMobile) => {
    if (isMobile) {
      handleDrawerToggle();
    }
    navigate(path);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CustomAppBar position="static" component="nav">
        <CustomToolbar>
          <Box sx={{ flexGrow: 2 }}>
            <Logo alt="Test Bites" src={Tastebites} />
          </Box>
          <HamburgunIcon
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            fontSize="large"
          >
            <MenuIcon />
          </HamburgunIcon>
          <NavContainer>
            {navItems(token).map(({ title, isButton, path }) =>
              isButton ? (
                <NavButton key={title} onClick={() => handleNavigate(path)}>
                  {title}
                </NavButton>
              ) : (
                <NavItem key={title} onClick={() => handleNavigate(path)}>
                  {title}
                </NavItem>
              )
            )}
          </NavContainer>
        </CustomToolbar>
      </CustomAppBar>

      <nav>
        <CustomDrawer
          variant="temporary"
          open={mobileDrawer}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          anchor="right"
          sx={{
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              backgroundColor: "#F9F9F9",
              width: drawerWidth,
            },
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <CustomCloseIconContainer>
              <CloseIcon onClick={handleDrawerToggle} />
            </CustomCloseIconContainer>
            <List>
              {navItems(token).map(({ title, path }) => (
                <ListItem key={title} disablePadding>
                  <ListItemButton onClick={() => handleNavigate(path, true)}>
                    <ListItemText primary={title} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </CustomDrawer>
      </nav>
    </Box>
  );
};

export default Header;
