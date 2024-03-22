import React from "react";
import "./image.css";

const Image = ({ id, url, upvoteCount, downvoteCount }) => {
  return (
    <div className="card">
      <img src={url} width="300" height="300" />
      <div className="info">
        <div className="vote_box">
          <div className="vote_count">{`upvote count: ${upvoteCount}`}</div>
          <div className="vote_button"> UPVOTE </div>
        </div>
        <div className="vote_box">
          <div className="vote_count">{`downvote count: ${downvoteCount}`}</div>
          <div className="vote_button"> DONWVOTE </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
