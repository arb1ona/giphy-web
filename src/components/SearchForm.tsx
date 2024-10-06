import React, { type ChangeEvent, type FormEvent } from "react";
import { useGiphyContext } from "../contexts/GiphyContext";
import { useGiphySearch } from "../hooks/useGiphySearch";
import styles from "./SearchForm.module.css";

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
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for images"
        className={styles.input}
      />
      <input
        type="text"
        value={overlayText}
        onChange={(e) => setOverlayText(e.target.value)}
        placeholder="Text to display on images"
        className={styles.input}
      />

      <select
        value={textPosition}
        onChange={(e) => setTextPosition(e.target.value)}
        className={styles.select}
      >
        <option value="top">on top of image - center top</option>
        <option value="bottom">on top of image - center bottom</option>
        <option value="below">below image - center</option>
      </select>
      <button type="submit" className={styles.button}>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
