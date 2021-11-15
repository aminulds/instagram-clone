import { useState } from "react";
import Post from "./Post";

const postDATA = [
  {
    id: "1",
    username: "aminulds",
    userImg: "https://avatars.githubusercontent.com/u/55378938?v=4",
    img: "https://avatars.githubusercontent.com/u/55378938?v=4",
    caption: "This is Post most beauty side of this country!",
  },
  {
    id: "2",
    username: "aminulds",
    userImg: "https://avatars.githubusercontent.com/u/55378938?v=4",
    img: "https://avatars.githubusercontent.com/u/55378938?v=4",
    caption: "This is Post most beauty side of this country!",
  },
  {
    id: "3",
    username: "aminulds",
    userImg: "https://avatars.githubusercontent.com/u/55378938?v=4",
    img: "https://avatars.githubusercontent.com/u/55378938?v=4",
    caption: "This is Post most beauty side of this country!",
  },
  {
    id: "4",
    username: "aminulds",
    userImg: "https://avatars.githubusercontent.com/u/55378938?v=4",
    img: "https://avatars.githubusercontent.com/u/55378938?v=4",
    caption: "This is Post most beauty side of this country!",
  },
];

function Posts() {
  return (
    <div>
      {postDATA.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
