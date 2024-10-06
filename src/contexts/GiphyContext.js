import React, { createContext, useState, useContext } from "react";

const GiphyContext = createContext();

export const GiphyProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  const value = {
    images,
    setImages,
    query,
    setQuery,
  };

  return (
    <GiphyContext.Provider value={value}>{children}</GiphyContext.Provider>
  );
};

export const useGiphyContext = () => useContext(GiphyContext);
