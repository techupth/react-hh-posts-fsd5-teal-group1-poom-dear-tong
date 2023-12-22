import { useState } from "react";
import userData from "./data/UserData";
function Posts() {
  const [displayData, setDisplayData] = useState([...userData]);
  function handleLike(index) {
    const newData = [...displayData];
    newData[index].likes += 1;
    setDisplayData([...newData]);
  }
  function handleDislike(index) {
    const newData = [...displayData];
    newData[index].likes -= 1;
    setDisplayData([...newData]);
  }
  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      {displayData.map((item, index) => {
        return (
          <div className="post-list" key={index}>
            <div className="post-item">
              <div className="post-header">
                <h2 key={index}>{item.title}</h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{item.likes}</span>
                </div>
              </div>
              <p className="post-content">{item.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => {
                    handleLike(index);
                  }}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => {
                    handleDislike(index);
                  }}
                >
                  Dislike
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
