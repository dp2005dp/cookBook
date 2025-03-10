import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/Recipes.css";

const Recipes = () => {
  const { name } = useParams();
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!name) return;
    fetchRecipes(name);
  }, [name]);

  const fetchRecipes = async (category) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      const data = await response.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
    setLoading(false);
  };

  return (
    <div className="recipes-container">
      <h2>{name ? `Recipes in ${name}` : "Explore Delicious Recipes"}</h2>
      {loading ? (
        <p>Loading recipes...</p>
      ) : (
        <div className="recipes-grid">
          {recipes.length > 0 ? (
            recipes.map((meal) => (
              <div key={meal.idMeal} className="recipe-card">
                <img src={meal.strMealThumb} alt={meal.strMeal} />
                <h3>{meal.strMeal}</h3>
              </div>
            ))
          ) : (
            // <p>No recipes found.</p>
            <></>
          )}
        </div>
      )}
    </div>
  );
};

export default Recipes;

