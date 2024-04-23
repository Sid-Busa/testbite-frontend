import React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";
import { BackdropWrapper } from "./component";

const Loader = () => {
  const loading = useSelector((state) => state.loader.loading);
  return (
    <BackdropWrapper open={loading}>
      <CircularProgress color="inherit" />
    </BackdropWrapper>
  );
};

export default Loader;
