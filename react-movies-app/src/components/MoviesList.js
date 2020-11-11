import React from "react";

export const MoviesList = ({ movies }) => {
  return (
    <>
      <h1>Code goes here</h1>

      <ul>
        {movies.map((m) => (
          <li>{m.title}</li>
        ))}
      </ul>
    </>
  );
};
