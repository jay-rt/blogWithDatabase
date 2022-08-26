import React, { useEffect, useState } from "react";
import Blog from "../components/Blog";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getPost = async () => {
      try {
        const response = await axios.get("http://localhost:3000/posts", {
          signal,
        });
        console.log("Data successfully recieved");
        setBlogs([...response.data]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPost();

    return () => {
      //cancels the request before the components unmount
      controller.abort();
    };
  }, []);

  //Checking when loading initially if the local storage has data and displaying the toast message
  useEffect(() => {
    const result = localStorage.getItem("res");
    if (result) {
      toast.success(result, {
        position: "bottom-center",
        theme: "dark",
        autoClose: 3000,
      });
      localStorage.clear();
    }
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
          <Link key={blog._id} to={`/posts/${blog._id}`} className="post">
            <Blog
              id={blog._id}
              title={blog.title}
              content={
                blog.content.length > 100
                  ? blog.content.substring(0, 100) + " ..."
                  : blog.content
              }
            />
          </Link>
        );
      })}
      <ToastContainer />
    </>
  );
};

export default Home;
