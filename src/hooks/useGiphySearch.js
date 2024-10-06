import { useCallback } from "react";
import { searchGiphy } from "../services/api";
import { useGiphyContext } from "../contexts/GiphyContext";

export const useGiphySearch = () => {
  const { setImages, query } = useGiphyContext();

  const search = useCallback(async () => {
    try {
      const results = await searchGiphy(query);
      setImages(results);
    } catch (error) {
      console.error("Error searching Giphy:", error);
    }
  }, [query, setImages]);

  return search;
};
