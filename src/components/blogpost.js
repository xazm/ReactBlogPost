// import React, { useState } from "react";

// function Blogpost() {
//   const [cardBlogs, setCardBlog] = useState([]);

//   const [tittle, setTittle] = useState("");
//   const [author, setAuthor] = useState("");
//   const [date, setDate] = useState("");
//   const [content, setContent] = useState("");

//   const tittleHandler = (e) => {
//     setTittle(e.target.value);
//   };
//   console.log(tittle);
//   const authorHandler = (e) => {
//     setAuthor(e.target.value);
//   };
//   const dateHandler = (e) => {
//     setDate(e.target.value);
//   };
//   const contentHandler = (e) => {
//     setContent(e.target.value);
//   };

//   // function submitCard(e) {
//   //   e.preventDefault();

//   //   // const newCardBlog = [
//   //   //   (tittle = tittle),
//   //   //   (author = author),
//   //   //   (date = date),
//   //   //   (content = content),
//   //   // ];

//   //   setCardBlog(tittle);
//   // }

//   return (
//     <div className="App-blogPost">
//       <div className="container">
//         <form className="form">
//           <label type="text">Tittle:</label>
//           <input onChange={tittleHandler}></input>
//           <label type="text">Author:</label>
//           <input onChange={authorHandler}></input>
//           <label>Date:</label>
//           <input type="date" onChange={dateHandler}></input>
//           <label>Content:</label>
//           <textarea rows="10" cols="20" onChange={contentHandler}></textarea>
//           <button onClick={submitCard}>Submit!</button>
//           <div className="card">{cardBlogs}</div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Blogpost;
import React, { useState } from "react";
import PostPopup from "./postPopup"; // Import the PostPopup component

function Blogpost() {
  const [cardBlogs, setCardBlog] = useState([]);
  const [tittle, setTittle] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [selectedPost, setSelectedPost] = useState(null); // Track the selected post

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

  const openPostPopup = (post) => {
    setSelectedPost(post);
  };

  const closePostPopup = () => {
    setSelectedPost(null);
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
          <button onClick={submitCard}>Submit!</button>
          <div>
            {cardBlogs.map((post, index) => (
              <div
                className="card"
                key={index}
                onClick={() => openPostPopup(post)}
              >
                <h3>{post.tittle}</h3>
                <p>
                  by: {post.author} on {post.date}
                </p>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
          {selectedPost && (
            <PostPopup post={selectedPost} onClose={closePostPopup} />
          )}
        </form>
      </div>
    </div>
  );
}

export default Blogpost;
