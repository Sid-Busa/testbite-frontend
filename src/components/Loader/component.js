import Backdrop from "@mui/material/Backdrop";
import { styled } from "@mui/material";

export const BackdropWrapper = styled(Backdrop)(({ theme }) => ({
  color: "#fff",
  zIndex: theme.zIndex.drawer + 1,
}));
