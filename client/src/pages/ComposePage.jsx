import React from "react";

const ComposePage = () => {
  return (
    <>
      <h1>Compose</h1>
      <form action="/compose" method="post">
        <div class="mb-3">
          <label class="form-label" for="postTitle">
            Title
          </label>
          <input
            class="form-control"
            type="text"
            name="postTitle"
            id="postTitle"
          />
        </div>
        <label class="form-label" for="postBody">
          Post
        </label>
        <div class="mb-3">
          <textarea
            class="form-control"
            name="postBody"
            id="postBody"
            rows="3"
          ></textarea>
        </div>
        <button class="btn btn-primary" type="submit">
          Publish
        </button>
      </form>
    </>
  );
};

export default ComposePage;
