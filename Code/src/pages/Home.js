import React from "react";
import Hero from "../components/Hero";
import CategoriesHome from "../components/CategoriesHome";
import Recipes from "../components/Recipes";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
  console.log("Home component is rendering");

  return (
    <div>
      <Hero />
      <CategoriesHome />
      <Recipes />
      <NewsLetter />
    </div>
  );
};

export default Home;

