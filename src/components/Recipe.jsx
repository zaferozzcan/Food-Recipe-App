import React from "react";

function Recipe(props) {
  return (
    <div className="recipe">
      <h2>{props.name}</h2>
      <img src={props.image} alt={props.name} />
      <a href={props.url}>Click Here To See The Recipe</a>
      <button>{props.ingredients}</button>
    </div>
  );
}

export default Recipe;
