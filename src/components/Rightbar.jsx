import React, { useEffect } from "react";
import { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  AvatarGroup,
  useTheme,
  useMediaQuery,
} from "@mui/material";

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
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [maxFriends, setMaxFriends] = useState(6);

  useEffect(() => {
    setMaxFriends(isSmallScreen ? 4 : 6);
    console.log(isSmallScreen);
  }, [isSmallScreen]);

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="h6" fontWeight="100">
          Online friends
        </Typography>
        <AvatarGroup max={maxFriends}>
          {friends.map((item, index) => (
            <Avatar key={item.src} alt={item.alt} src={item.src} />
          ))}
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
