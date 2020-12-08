import React from "react";
import { Route } from "react-router-dom";

import { MoviesList } from "./components/MoviesList";
import { MovieDetail } from "./components/MovieDetail";
import { MoviesPlaylist } from "./components/MoviesPlaylist";

export default function App() {
  return (
    <div className="App">
      <Route path="/" exact component={MoviesList} />
      <Route path="/movie/:id" component={MovieDetail} />
      <Route path="/playlist" component={MoviesPlaylist} />
    </div>
  );
}
