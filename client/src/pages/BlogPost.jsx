import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { Link, useNavigate, useParams } from "react-router-dom";
import Blog from "../components/Blog";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState("");
  const getPost = async (_id) => {
    try {
      const res = await axios.get(`http://localhost:3000/posts/${_id}`);
      console.log(res.data);
      setBlog(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getPost(id);
  }, [id]);

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

  const handleClick = async () => {
    const res = await axios.delete(`http://localhost:3000/posts/${id}`);
    console.log(res.data);
    localStorage.setItem("res", res.data);
    navigate("/");
  };

  return (
    <>
      <Blog title={blog.title} content={blog.content} />
      <div className="d-grid gap-2">
        <Link to={`/edit/${blog._id}`} className="btn btn-primary">
          EDIT
        </Link>
        <Button onClick={handleClick} variant="danger">
          DELETE
        </Button>
      </div>
      <ToastContainer />
    </>
  );
};

export default BlogPost;
