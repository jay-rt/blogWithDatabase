import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const getPost = async () => {
    try {
      const response = await axios.get("http://localhost:3000/posts");
      console.log("Data successfully recieved");
      setBlogs([...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <>
      <h1>Home</h1>
      <p>
        Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper
        auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet
        justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo
        vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales
        ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis
        dis parturient montes nascetur ridiculus mus mauris vitae ultricies.
        Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus.
        Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod
        lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a
        iaculis at erat pellentesque adipiscing.
      </p>

      {blogs.map((blog) => {
        return (
          <Blog
            key={blog._id}
            id={blog._id}
            title={blog.title}
            content={
              blog.content.length > 100
                ? blog.content.substring(0, 100) + "..."
                : blog.content
            }
          />
        );
      })}
    </>
  );
};

export default Home;
