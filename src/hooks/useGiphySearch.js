import { useCallback } from "react";
import { searchGiphy } from "../services/api";
import { useGiphyContext } from "../contexts/GiphyContext";

export const useGiphySearch = () => {
  const { setImages, query, setIsLoading, setError } = useGiphyContext();

  const search = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      if (!query.trim()) {
        throw new Error("Please enter a search term");
      }
      const results = await searchGiphy(query);
      if (results.length === 0) {
        setError("No images found. Try a different search term.");
      } else {
        setImages(results);
      }
    } catch (error) {
      console.error("Error searching Giphy:", error);
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred. Please try again.");
      }
      setImages([]); // Clear images in case of error
    } finally {
      setIsLoading(false);
    }
  }, [query, setImages, setIsLoading, setError]);

  return search;
};
