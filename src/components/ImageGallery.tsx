import { useGiphyContext } from "../contexts/GiphyContext";
import styles from "./ImageGallery.module.css";
import { ImageCard } from "./ImageCard";
import { usePagination } from "../hooks/usePagination";

const ImageGallery = () => {
  const { images, overlayText, textPosition, isLoading, error } =
    useGiphyContext();

  const { currentPage, pageCount, handlePrevious, handleNext, visibleImages } =
    usePagination(images);

  if (images.length === 0) {
    return <div className={styles.noImages}>No images to display</div>;
  }

  if (isLoading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  if (error) {
    return <div className={styles.error}>{error}</div>;
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
