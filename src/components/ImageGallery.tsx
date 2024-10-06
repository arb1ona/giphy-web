import React from "react";
import { useGiphyContext } from "../contexts/GiphyContext";

const ImageGallery = () => {
  const { images } = useGiphyContext();

  const ImageCard = ({ url }: { url: string }) => {
    return (
      <div>
        <img src={url} alt="Giphy image" />
      </div>
    );
  };

  return (
    <div>
      {images.map((url: string) => (
        <ImageCard key={url} url={url} />
      ))}
    </div>
  );
};

export default ImageGallery;
