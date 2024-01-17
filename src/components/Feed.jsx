import React from "react";
import { Box, Avatar } from "@mui/material";
import Post from "./Post";
import SajadImage from "../images/Sajad.jpeg"; // Static import

const posts = [
  {
    title: "React Supremacy",
    date: "January 16th, 2024",
    src: "https://www.openxcell.com/wp-content/uploads/2023/03/react-web-development.jpg",
    avatarSrc: SajadImage,
    description:
      "React.js is a top pick for front-end development because it's superflexible and fast. It lets developers break things down into reusable chunks (components), making code easier to manage. Plus, React's virtual DOM keeps things speedy by only updating what needs to change, so your web apps feel snappy. It also has a massive community and tons of handy tools, so you're never short on resources. All in all, React rocks for building modern, efficient web apps!",
  },
  {
    title: "Shrimp and Chorizo Paella",
    date: "January 14th, 2024",
    src: "https://www.tastingtable.com/img/gallery/classic-seafood-paella-recipe/l-intro-1640888240.jpg",
    avatarSrc:
      "https://img.freepik.com/free-vector/coloured-chefdesign_1152-72.jpg?w=1380&t=st=1705423313~exp=1705423913~hmac=c15aa866aa2aaf7b696da1de0fdfc316d9294c0b7d43435c3f708aa03a3d7942",
    description:
      "Shrimp and Chorizo Paella is a vibrant Spanish rice dish that combines succulent shrimp and flavorful chorizo sausage with saffron-infused rice, creating a delicious and colorful meal.",
  },
];

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
