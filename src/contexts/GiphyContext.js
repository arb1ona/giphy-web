import React, { createContext, useState, useContext } from "react";

const GiphyContext = createContext();

export const GiphyProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [overlayText, setOverlayText] = useState("");
  const [textPosition, setTextPosition] = useState("top");

  const value = {
    images,
    setImages,
    query,
    setQuery,
    overlayText,
    setOverlayText,
    textPosition,
    setTextPosition,
  };

  return (
    <GiphyContext.Provider value={value}>{children}</GiphyContext.Provider>
  );
};

export const useGiphyContext = () => useContext(GiphyContext);
