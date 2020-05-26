import React, { useState } from "react";
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
      {recipes.map((recipe)=>(
        <Recipe name={recipe.recipe.label}
        calories ={recipe.recipe.calories}
        image={recipe.recipe.image}/>
      ))}
    </div>
  );
}
