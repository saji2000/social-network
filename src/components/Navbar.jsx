import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import { Public, Mail, Notifications } from "@mui/icons-material";
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
  height: "2em",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "1em",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "0.5em",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToolBar>
        <Typography variant="h5" sx={{ display: { xs: "none", sm: "block" } }}>
          Social Network
        </Typography>
        <Public />
        <Search>
          <InputBase placeholder="Search..." sx={{ fontSize: "1em" }} />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail color="white" />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications color="white" />
          </Badge>
          <Avatar
            sx={{ width: "3em", height: "3em" }}
            src="https://media.licdn.com/dms/image/D5635AQHmtYRtACb8HA/profile-framedphoto-shrink_400_400/0/1695841973114?e=1705708800&v=beta&t=zG1drtTS1XjYVD7t0MHYj57qmZhCNvLF6Gq_8TJgS_U"
          />
        </Icons>
        <UserBox>
          <Avatar
            sx={{ width: "3em", height: "3em" }}
            src="https://media.licdn.com/dms/image/D5635AQHmtYRtACb8HA/profile-framedphoto-shrink_400_400/0/1695841973114?e=1705708800&v=beta&t=zG1drtTS1XjYVD7t0MHYj57qmZhCNvLF6Gq_8TJgS_U"
          />
        </UserBox>
      </StyledToolBar>
    </AppBar>
  );
};

export default Navbar;
