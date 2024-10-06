import React, { type ChangeEvent, type FormEvent } from "react";
import { useGiphyContext } from "../contexts/GiphyContext";
import { useGiphySearch } from "../hooks/useGiphySearch";

const SearchForm = () => {
  const { query, setQuery } = useGiphyContext();
  const search = useGiphySearch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    search();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for images"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
