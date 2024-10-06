import React, { type ChangeEvent, type FormEvent } from "react";
import { useGiphyContext } from "../contexts/GiphyContext";
import { useGiphySearch } from "../hooks/useGiphySearch";

const SearchForm = () => {
  const {
    query,
    setQuery,
    overlayText,
    setOverlayText,
    textPosition,
    setTextPosition,
  } = useGiphyContext();
  const search = useGiphySearch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images"
      />
      <input
        type="text"
        value={overlayText}
        onChange={(e) => setOverlayText(e.target.value)}
        placeholder="Text to display on images"
      />

      <select
        value={textPosition}
        onChange={(e) => setTextPosition(e.target.value)}
      >
        <option value="top">on top of image - center top</option>
        <option value="bottom">on top of image - center bottom</option>
        <option value="below">below image - center</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
