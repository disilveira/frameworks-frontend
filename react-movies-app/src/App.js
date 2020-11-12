import React from "react";
import { Route } from "react-router-dom";

import { PopularMoviesList } from "./components/PopularMoviesList";
import { MovieDetail } from "./components/MovieDetail";

export default function App() {
  return (
    <div className="App">
      <Route path="/" exact component={PopularMoviesList} />
      <Route path="/movie/:id" component={MovieDetail} />
    </div>
  );
}
