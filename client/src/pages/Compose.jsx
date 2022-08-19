import axios from "axios";
import React, { useState } from "react";

const Compose = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/posts", blog);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    setBlog({
      title: "",
      content: "",
    });
  };

  return (
    <>
      <h1>Compose</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="title">
            Title
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="title"
            id="title"
            value={blog.title}
          />
        </div>
        <label className="form-label" htmlFor="content">
          Post
        </label>
        <div className="mb-3">
          <textarea
            onChange={handleChange}
            className="form-control"
            name="content"
            id="content"
            rows="3"
            value={blog.content}
          ></textarea>
        </div>
        <button className="btn btn-primary" type="submit">
          Publish
        </button>
      </form>
    </>
  );
};

export default Compose;
