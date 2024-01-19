import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  Checkbox,
} from "@mui/material";

import { MoreVert, Favorite, Share, FavoriteBorder } from "@mui/icons-material";

const Post = ({ children, title, date, src, avatar }) => {
  const styledAvatar = React.cloneElement(avatar, {
    sx: { width: "2.5em", height: "2.5em" },
  });
  return (
    <div>
      <Card>
        <CardHeader
          avatar={styledAvatar}
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={title}
          subheader={date}
        />
        <CardMedia
          component="img"
          height="20%"
          image={src}
          alt="broken image"
        />
        <CardContent>
          <Typography variant="body1" color="text.secondary">
            {children}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
