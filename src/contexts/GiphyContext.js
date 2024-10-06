import React, { createContext, useState, useContext } from "react";

const GiphyContext = createContext();

export const GiphyProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [overlayText, setOverlayText] = useState("");
  const [textPosition, setTextPosition] = useState("top");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const value = {
    images,
    setImages,
    query,
    setQuery,
    overlayText,
    setOverlayText,
    textPosition,
    setTextPosition,
    isLoading,
    setIsLoading,
    error,
    setError,
  };

  return (
    <GiphyContext.Provider value={value}>{children}</GiphyContext.Provider>
  );
};

export const useGiphyContext = () => {
  const context = useContext(GiphyContext);

  if (context === undefined) {
    throw new Error(`useGiphyContext must be used within a GiphyProvider.js`);
  }
  return context;
};
