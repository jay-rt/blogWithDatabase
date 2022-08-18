import React from "react";

const Blog = (props) => {
  return (
    <>
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </>
  );
};

export default Blog;
