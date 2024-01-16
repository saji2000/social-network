import React from "react";
import { Box, Avatar } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <Box flex={4} p={2}>
      <Post
        title="React Supremacy"
        date="January 16th, 2024"
        src="https://www.openxcell.com/wp-content/uploads/2023/03/react-web-development.jpg"
        avatar={<Avatar src={require("../images/Sajad.jpeg")} />}
      >
        React.js is a top pick for front-end development because it's super
        flexible and fast. It lets developers break things down into reusable
        chunks (components), making code easier to manage. Plus, React's virtual
        DOM keeps things speedy by only updating what needs to change, so your
        web apps feel snappy. It also has a massive community and tons of handy
        tools, so you're never short on resources. All in all, React rocks for
        building modern, efficient web apps!
      </Post>
      <Post
        title="Shrimp and Chorizo Paella"
        date="January 15th, 2024"
        src="https://www.tastingtable.com/img/gallery/classic-seafood-paella-recipe/l-intro-1640888240.jpg"
        avatar={
          <Avatar src="https://img.freepik.com/free-vector/coloured-chefdesign_1152-72.jpg?w=1380&t=st=1705423313~exp=1705423913~hmac=c15aa866aa2aaf7b696da1de0fdfc316d9294c0b7d43435c3f708aa03a3d7942">
            R
          </Avatar>
        }
      >
        This impressive paella is a perfect party dish and a fun meal to cook
        together with your guests. Add 1 cup of frozen peas along with the
        mussels, if you like.
      </Post>

      {/* <Post /> */}
    </Box>
  );
};

export default Feed;
