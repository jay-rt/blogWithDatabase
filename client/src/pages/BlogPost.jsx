import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Blog from "../components/Blog";

const BlogPost = () => {
  const { id } = useParams();
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

  return (
    <>
      <Blog title={blog.title} content={blog.content} />
      <div className="d-grid gap-2">
        <button type="button" className="btn btn-primary">
          EDIT
        </button>
        <button type="button" className="btn btn-danger">
          DELETE
        </button>
      </div>
    </>
  );
};

export default BlogPost;
