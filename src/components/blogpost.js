// export default Blogpost;
import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function Blogpost() {
  const [cardBlogs, setCardBlog] = useState([]);
  const [tittle, setTittle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [editPostId, setEditPostId] = useState(null);

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
    // Check if the post with the same ID is being edited
    if (editPostId !== null) {
      // If post with the same ID is being edited, update it
      const updatedCardBlogs = cardBlogs.map((post) =>
        post.id === editPostId
          ? { tittle, author, date, content, id: editPostId }
          : post
      );
      setCardBlog(updatedCardBlogs);
      // Clear the editPostId after updating
      setEditPostId(null);
      console.log(updatedCardBlogs);
    } else {
      const newPost = { tittle, author, date, content, id: uuid() };
      setCardBlog([...cardBlogs, newPost]);
      console.log(newPost);
    }
    // Clear form inputs
    setTittle("");
    setAuthor("");
    setDate("");
    setContent("");
  };

  const editCard = (data, e) => {
    e.preventDefault();
    // Populate form fields with the data of the selected post
    setEditPostId(data.id);
    setTittle(data.tittle);
    setAuthor(data.author);
    setDate(data.date);
    setContent(data.content);
    console.log(data.id);
  };

  const closeCard = (data, e) => {
    e.preventDefault();
    const newArr = cardBlogs.filter((item) => item.id !== data.id);
    setCardBlog(newArr);
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
        </form>
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
                <button onClick={(e) => editCard(post, e)}>Edit</button>
                <button onClick={(e) => closeCard(post, e)}> Close</button>
              </div>
            </div>
          ))}
        </div>
        {/* condition ...
        ... if post card empty. render a No Post Available  */}
      </div>
    </div>
  );
}
export default Blogpost;
