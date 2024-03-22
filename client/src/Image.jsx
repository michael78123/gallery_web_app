import React from "react";

const Image = ({id, url, upvoteCount, downvoteCount}) => {
  return <div><img src={url} /></div>;
};

export default Image;
