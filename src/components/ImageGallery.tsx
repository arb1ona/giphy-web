import React, { useState } from "react";
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

const IMAGES_PER_PAGE = 3;

const ImageGallery = () => {
  const { images, overlayText, textPosition } = useGiphyContext();
  const [currentPage, setCurrentPage] = useState(0);

  const pageCount = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIndex = currentPage * IMAGES_PER_PAGE;
  const visibleImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(pageCount - 1, prev + 1));
  };

  if (images.length === 0) {
    return <div className={styles.noImages}>No images to display</div>;
  }

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.gallery}>
        {visibleImages.map((url: string) => (
          <ImageCard
            key={url}
            url={url}
            overlayText={overlayText}
            textPosition={textPosition}
          />
        ))}
      </div>

      {pageCount > 1 && (
        <div className={styles.pagination}>
          <button
            onClick={handlePrevious}
            disabled={currentPage === 0}
            className={styles.paginationButton}
          >
            Previous
          </button>
          <span className={styles.pageInfo}>
            Page {currentPage + 1} of {pageCount}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === pageCount - 1}
            className={styles.paginationButton}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
