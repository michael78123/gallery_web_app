import React, { useState, useEffect } from "react";

const Vote = ({ title, actionTitle, vote, handleClick }) => {
  const [voteCount, setVoteCount] = useState(vote);

  const onClick = async () => {
    const newCount = await handleClick();
    setVoteCount(newCount);
  };

  return (
    <div className="vote_box">
      <div className="vote_count">{`${title}: ${voteCount}`}</div>
      <div className="vote_button" onClick={onClick}>
        {actionTitle}
      </div>
    </div>
  );
};

export default Vote;
