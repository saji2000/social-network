import React from "react";
import { Box, Avatar } from "@mui/material";
import Post from "./Post";
import { posts } from "../data/data";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      {posts.map((item, index) => (
        <Post
          key={index}
          title={item.title}
          date={item.date}
          src={item.src}
          avatar={<Avatar src={item.avatarSrc} />}
        >
          {item.description}
        </Post>
      ))}
    </Box>
  );
};

export default Feed;
