import React from "react";
import styles from "./ImageGallery.module.css";

type TextPosition = "top" | "bottom" | "below";

interface ImageCardProps {
  url: string;
  overlayText: string;
  textPosition: TextPosition;
}

export const ImageCard = ({
  url,
  overlayText,
  textPosition,
}: ImageCardProps) => {
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
