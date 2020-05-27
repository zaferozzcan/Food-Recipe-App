import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import Recipe from "./components/Recipe";

export default function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  var APP_ID = "acec7a02";
  var APP_KEY = "dce40b8cc0766f46226e5d82c61ffb62";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    setRecipes(result.data.hits);
    console.log(recipes);
    setQuery("");
  };

  function handleOnChange(event) {
    setQuery(event.target.value);
  }
  function handleOnSubmit(event) {
    getData();
    event.preventDefault();
  }
  return (
    <div className="App">
      <h1 onClick={getData}>Food Searching App</h1>
      <form className="search-form" onSubmit={handleOnSubmit}>
        <input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search Food"
          onChange={handleOnChange}
          value={query}
        />
        <input type="submit" value="Search" />
      </form>
      {recipes !== [] ? (
        recipes.map(recipe => (
          <Recipe
            key={uuidv4()}
            name={recipe.recipe.label}
            url={recipe.recipe.url}
            image={recipe.recipe.image}
            ingredient={recipe.recipe.ingredient}
          />
        ))
      ) : (
        <h1>"There is no recipe for that search!"</h1>
      )}
    </div>
  );
}
