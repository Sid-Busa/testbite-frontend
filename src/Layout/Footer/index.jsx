import { Box } from "@mui/material";
import Tastebites from "../../assets/images/Tastebites.png";
import React from "react";
import {
  CopyRightText,
  FooterContainer,
  FooterItemContainer,
  Line,
  NavContainer,
  NavItem,
} from "./components";
import { Logo } from "../Header/components";
import { footerItems } from "../../constants";
import { useNavigate } from "react-router-dom";
import { getFromLocalStorage } from "../../utills/storage";

const Footer = () => {
  const navigate = useNavigate();
  const token = getFromLocalStorage("token");

  const handleNavigate = (path) => {
    if (path) {
      navigate(path);
    }
  };
  return (
    <FooterContainer>
      <FooterItemContainer>
        <Box sx={{ flexGrow: 2 }}>
          <Logo alt="Test Bites" src={Tastebites} />
        </Box>
        <NavContainer>
          {footerItems(token).map(({ title, path }) => (
            <NavItem key={title} onClick={() => handleNavigate(path)}>
              {title}
            </NavItem>
          ))}
        </NavContainer>
      </FooterItemContainer>
      <Line />
      <CopyRightText> 2024 © Copyright | All Rights Reserved </CopyRightText>
    </FooterContainer>
  );
};

export default Footer;
