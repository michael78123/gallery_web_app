import { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";
import "./App.css";

const App = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get("/api/images");
    setImages(response.data.images);
  };

  const upvote = async (id) => {
    return await axios.post("/api/upvote", {id: id});
  };


  const downvote = async (id) => {
    return await axios.post("/api/downvote", {id: id});
  };

  useEffect(() => {
    fetchImages();
  }, []);

  console.log('rerender????')
  return (
    <div>
      {images &&
        images.map(
          ({
            id,
            url,
            upvote_count: upvoteCount,
            downvote_count: downvoteCount,
          }) => (
            <Image
              key={id}
              id={id}
              url={url}
              upvoteCount={upvoteCount}
              downvoteCount={downvoteCount}
              handleUpvoteClick={() => upvote(id)}
              handleDownvoteClick={() => downvote(id)}
            />
          )
        )}
    </div>
  );
};

export default App;
