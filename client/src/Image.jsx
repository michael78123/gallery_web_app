import React, { useState, useEffect } from "react";
import Vote from "./Vote";
import "./image.css";

const Image = ({
  id,
  url,
  upvoteCount,
  downvoteCount,
  handleUpvoteClick,
  handleDownvoteClick,
}) => {
  return (
    <div className="card">
      <img src={url} width="300" height="300" />
      <div className="info">
        <Vote
          title="upvote count"
          actionTitle="UPVOTE"
          vote={upvoteCount}
          handleClick={handleUpvoteClick}
        />
        <Vote
          title="downvote count"
          actionTitle="DOWNVOTE"
          vote={downvoteCount}
          handleClick={handleDownvoteClick}
        />
      </div>
    </div>
  );
};

export default Image;
