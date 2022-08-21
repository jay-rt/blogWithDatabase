import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });

  const navigate = useNavigate();

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
      //Saving the server response to localStorage for displaying toast message later
      localStorage.setItem("res", res.data);
    } catch (error) {
      console.log(error);
    }
    setBlog({
      title: "",
      content: "",
    });
    navigate("/");
  };

  return (
    <>
      <h1>Create a new post</h1>
      <Form onSubmit={handleSubmit}>
        {/* controlId sets id for Form Control and htmlFor for Form Label*/}
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="title"
            value={blog.title}
            required
          ></Form.Control>
        </Form.Group>
        <Form.Group className="mb-3" controlId="content">
          <Form.Label>Post</Form.Label>
          <Form.Control
            as="textarea"
            onChange={handleChange}
            name="content"
            rows={3}
            value={blog.content}
            required
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          CREATE
        </Button>
      </Form>
    </>
  );
};

export default CreatePost;
