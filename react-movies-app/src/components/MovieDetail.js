import React from 'react';

export const MovieDetail = (props) => (
<h1>Detalhe do Filme: {props.match.params.id}</h1>
);