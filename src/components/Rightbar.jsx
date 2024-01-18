import React, { useEffect } from "react";
import { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { friends, images, conversations } from "../data/data";

/**
 * Rightbar component that displays online friends.
 * It shows a varying number of avatars based on screen size.
 */
const Rightbar = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [maxFriends, setMaxFriends] = useState(6);

  // modifying the friend's list size based on the screen size
  useEffect(() => {
    setMaxFriends(isSmallScreen ? 4 : 6);
    console.log(isSmallScreen);
  }, [isSmallScreen]);

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width="25%">
        <Typography variant="h6" fontWeight="100">
          Online friends
        </Typography>
        <AvatarGroup max={maxFriends}>
          {friends.map((item, index) => (
            <Avatar key={item.src} alt={item.alt} src={item.src} />
          ))}
        </AvatarGroup>
        <Typography variant="h6" fontWeight="100">
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          {images.map((item, index) => {
            return (
              <ImageListItem>
                <img key={item.src} src={item.src} alt={item.alt} />
              </ImageListItem>
            );
          })}
        </ImageList>
        <Typography variant="h6" fontWeight="100">
          Latest Conversations
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {conversations.map((item, index) => {
            return (
              <>
                <ListItem alignItems="flex-start" key={item.avatarSrc}>
                  <ListItemAvatar>
                    <Avatar alt={item.avatarAlt} src={item.avatarSrc} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.primary}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {item.author}
                        </Typography>
                        {item.secondary}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </>
            );
          })}
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
