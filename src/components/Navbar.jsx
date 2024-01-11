import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
} from "@mui/material";
import { Public, Mail } from "@mui/icons-material";
import React from "react";

const StyledToolBar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "30%",
  height: "1.4em",
}));

const Icons = styled(Box)(({ theme }) => ({}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolBar variant="dense">
        <Typography variant="h7" sx={{ display: { xs: "none", sm: "block" } }}>
          Social Network
        </Typography>
        <Public />
        <Search>
          <InputBase placeholder="Search..." sx={{ fontSize: "0.7em" }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="primary">
            <Mail color="white" />
          </Badge>
        </Icons>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
