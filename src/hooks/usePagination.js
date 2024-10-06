import { useState } from "react";

export const usePagination = (images) => {
  const [currentPage, setCurrentPage] = useState(0);
  const IMAGES_PER_PAGE = 3;

  const pageCount = Math.ceil(images.length / IMAGES_PER_PAGE);
  const startIndex = currentPage * IMAGES_PER_PAGE;
  const visibleImages = images.slice(startIndex, startIndex + IMAGES_PER_PAGE);

  const handlePrevious = () => {
    setCurrentPage((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(pageCount - 1, prev + 1));
  };

  return {
    currentPage,
    pageCount,
    handlePrevious,
    handleNext,
    visibleImages,
  };
};
