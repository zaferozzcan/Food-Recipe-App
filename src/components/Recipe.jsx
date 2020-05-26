import React from "react";

function Recipe(props) {
  return (
    <div className="recipes">
      <h1>{props.name}</h1>
      <p>{props.calories}</p>
      <img src={props.image} alt="" />
    </div>
  );
}

export default Recipe;
