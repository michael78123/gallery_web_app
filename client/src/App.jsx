import { useState, useEffect } from "react";
import axios from "axios";

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
        images.map((image) => (
          <img src={image.url} />
        ))}
    </div>
  );
};

export default App;
