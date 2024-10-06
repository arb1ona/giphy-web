import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import ImageGallery from "./components/ImageGallery";
import { GiphyProvider } from "./contexts/GiphyContext";

function App() {
  return (
    <GiphyProvider>
      <div className="App">
        <h1 className="heading">Giphy Image Explorer</h1>
        <SearchForm />
        <ImageGallery />
      </div>
    </GiphyProvider>
  );
}

export default App;
