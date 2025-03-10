import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import "../styles/Recipes.css"; // Fix the filename here







const Recipie = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipe();
  }, [id]);

  return (
    <div className="recipe-details-container">
      {recipe ? (
        <>
          <h2>{recipe.strMeal}</h2>
          <img src={recipe.strMealThumb} alt={recipe.strMeal} />
          <p><strong>Category:</strong> {recipe.strCategory}</p>
          <p><strong>Area:</strong> {recipe.strArea}</p>
          <p><strong>Instructions:</strong> {recipe.strInstructions}</p>
          <a href={recipe.strYoutube} target="_blank" rel="noopener noreferrer">
            Watch on YouTube
          </a>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Recipie;
