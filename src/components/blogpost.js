// export default Blogpost;
import React, { useState } from "react";

function Blogpost() {
  const [cardBlogs, setCardBlog] = useState([]);
  const [tittle, setTittle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");

  const tittleHandler = (e) => {
    setTittle(e.target.value);
  };

  const authorHandler = (e) => {
    setAuthor(e.target.value);
  };

  const dateHandler = (e) => {
    setDate(e.target.value);
  };

  const contentHandler = (e) => {
    setContent(e.target.value);
  };

  const submitCard = (e) => {
    e.preventDefault();
    const newPost = { tittle, author, date, content };
    setCardBlog([...cardBlogs, newPost]);
    // Clear form inputs
    setTittle("");
    setAuthor("");
    setDate("");
    setContent("");
  };

  const closeCard = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App-blogPost">
      <div className="container">
        <form className="form">
          <label htmlFor="tittle">Title:</label>
          <input
            id="tittle"
            type="text"
            value={tittle}
            onChange={tittleHandler}
          />
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={authorHandler}
          />
          <label htmlFor="date">Date:</label>
          <input id="date" type="date" value={date} onChange={dateHandler} />
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            rows="10"
            cols="20"
            value={content}
            onChange={contentHandler}
          ></textarea>
          <button className="submitBtn" onClick={submitCard}>
            Submit!
          </button>
          <div className="postCard">
            {cardBlogs.map((post, index) => (
              <div className="card" key={index}>
                <h2>{post.tittle}</h2>
                <p>
                  by: {post.author}
                  on {post.date}
                </p>
                <p>{post.content}</p>
                <div className="cardBtn">
                  <button>Edit</button>
                  <button onClick={closeCard}> Close</button>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
}
export default Blogpost;
