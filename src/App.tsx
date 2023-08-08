import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { Movie } from "./Movie";
import { Favorites } from "./Favorites";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/:id" element={<Movie />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
