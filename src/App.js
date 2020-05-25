import React from "react";
import axios from "axios";

export default function App() {
  const APP_ID = "";
  const APP_KEY = "";
  const url =
    "https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}";

  const getData = async () => {
    const result = await axios.get(url);
    console.log(result);
  };

  return (
    <div className="App">
      <h1>Search Your Food</h1>
    </div>
  );
}
