import React from "react";

function Recipe(props) {
  return (
    <div className="recipes">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <a href={props.url}>Click Here To See The Recipe</a>
    </div>
  );
}

export default Recipe;
