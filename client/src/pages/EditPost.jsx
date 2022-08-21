import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title: "",
    content: "",
  });
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlog((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.put(`http://localhost:3000/posts/${id}`, blog);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
    setBlog({
      title: "",
      content: "",
    });
    navigate(`/posts/${id}`);
  };

  return (
    <>
      <h1>Update the Post</h1>
      <Form onSubmit={handleSubmit}>
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
            value={blog.content}
            rows={3}
            required
          ></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          UPDATE
        </Button>
      </Form>
    </>
  );
};

export default EditPost;
