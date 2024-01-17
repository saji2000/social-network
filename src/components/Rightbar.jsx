import React from "react";
import { Box, Typography, Avatar, AvatarGroup } from "@mui/material";

const friends = [
  {
    alt: "Remy Sharp",
    src: "https://material-ui.com/static/images/avatar/1.jpg",
  },
  {
    alt: "Travis Howard",
    src: "https://material-ui.com/static/images/avatar/2.jpg",
  },
  {
    alt: "Cindy Baker",
    src: "https://material-ui.com/static/images/avatar/3.jpg",
  },
  {
    alt: "Agnes Walker",
    src: "https://material-ui.com/static/images/avatar/7.jpg",
  },
  {
    alt: "Trevor Henderson",
    src: "https://material-ui.com/static/images/avatar/6.jpg",
  },
  {
    alt: "Trevor Henderson",
    src: "",
  },
  {
    alt: "Trevor Henderson",
    src: "https://material-ui.com/static/images/avatar/8.jpg",
  },
  {
    alt: "Trevor Henderson",
    src: "https://material-ui.com/static/images/avatar/9.jpg",
  },
];

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight="100">
          Online friends
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Remy Sharp"
            src="https://material-ui.com/static/images/avatar/1.jpg"
          />
          <Avatar
            alt="Travis Howard"
            src="https://material-ui.com/static/images/avatar/2.jpg"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://material-ui.com/static/images/avatar/3.jpg"
          />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/6.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/7.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/8.jpg"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://material-ui.com/static/images/avatar/9.jpg"
          />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
