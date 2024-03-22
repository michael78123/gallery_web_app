import { useState, useEffect } from "react";
import axios from "axios";
import Image from "./Image";

const App = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const response = await axios.get("/api/images");
    setImages(response.data.images);
  };

  // useEffect(() => {
  //   fetch("/api/api")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //     })
  //     .then((data) => {
  //       setTitle(data.name);
  //     });
  // }, []);

  useEffect(() => {
    fetchImages();
  }, []);

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
              id={id}
              url={url}
              upvoteCount={upvoteCount}
              downvoteCount={downvoteCount}
            />
          )
        )}
    </div>
  );
};

export default App;
