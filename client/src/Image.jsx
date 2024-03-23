import React, { useState, useEffect } from "react";
import "./image.css";

const Image = ({ id, url, upvoteCount, downvoteCount, handleUpvoteClick, handleDownvoteClick }) => {
  const [upvodeState, setUpvoteState] = useState(upvoteCount);
  const [downvoteState, setDownvoteState] = useState(downvoteCount);

  const onUpvoteClick = async () => {
    const newCount = await handleUpvoteClick();
    setUpvoteState(newCount.data.upvote_count);
  }

  const onDownvoteClick = async () => {
    const newCount = await handleDownvoteClick();
    setDownvoteState(newCount.data.downvote_count);
  }



  return (
    <div className="card">
      <img src={url} width="300" height="300" />
      <div className="info">
        <div className="vote_box">
          <div className="vote_count">{`upvote count: ${upvodeState}`}</div>
          <div className="vote_button" onClick={onUpvoteClick}> UPVOTE </div>
        </div>
        <div className="vote_box">
          <div className="vote_count">{`downvote count: ${downvoteState}`}</div>
          <div className="vote_button" onClick={onDownvoteClick}> DONWVOTE </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
