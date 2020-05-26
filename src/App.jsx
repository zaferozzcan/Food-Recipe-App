import React from "react";
import Axios from "axios";

export default function App() {
  var APP_ID = "acec7a02";
  var APP_KEY = "dce40b8cc0766f46226e5d82c61ffb62";

  const url = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const result = await Axios.get(url);
    console.log(result);
  };

  return (
    <div className="App">
      <h1>Food Searching App</h1>
      <form className="search-form">
        <input
          type="text"
          name="query"
          autoComplete="off"
          placeholder="Search Food"
        />
        <input type="submit" value="Search" />
      </form>
      <div className="recipes" />
    </div>
  );
}
