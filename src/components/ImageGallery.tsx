import React from "react";
import { useGiphyContext } from "../contexts/GiphyContext";
import styles from "./ImageGallery.module.css";

type TextPosition = "top" | "bottom" | "below";

interface ImageCardProps {
  url: string;
  overlayText: string;
  textPosition: TextPosition;
}

const ImageCard = ({ url, overlayText, textPosition }: ImageCardProps) => {
  return (
    <div className={styles.imageCard}>
      <img src={url} alt="Giphy image" />
      {overlayText && (
        <div className={`${styles.overlay} ${styles[textPosition]}`}>
          {overlayText}
        </div>
      )}
    </div>
  );
};

const ImageGallery = () => {
  const { images, overlayText, textPosition } = useGiphyContext();

  return (
    <div className={styles.gallery}>
      {images.map((url: string) => (
        <ImageCard
          key={url}
          url={url}
          overlayText={overlayText}
          textPosition={textPosition}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
