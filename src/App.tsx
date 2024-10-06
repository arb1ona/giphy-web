import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import ImageGallery from "./components/ImageGallery";
import Pagination from "./components/Pagination";
import { GiphyProvider } from "./contexts/GiphyContext";

function App() {
  return (
    <GiphyProvider>
      <div className="App">
        <h1>Giphy Image Explorer</h1>
        <SearchForm />
        <ImageGallery />
        {/* <Pagination /> */}
      </div>
    </GiphyProvider>
  );
}

export default App;
