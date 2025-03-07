import React, { useState } from "react";
import "../styles/Search.css";
import { Link } from "react-router-dom";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [mealData, setMealData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null); // Store selected meal for details popup

  const fetchMeals = async () => {
    if (query.trim() === "") return;

    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
      );
      const data = await response.json();
      if (data.meals) {
        setMealData(data.meals);
        setShowPopup(true);
      } else {
        setMealData([]);
        setShowPopup(false);
      }
    } catch (error) {
      console.error("Error fetching meal data:", error);
      setMealData([]);
      setShowPopup(false);
    }
  };

  const handleMealClick = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div className="search-page-container">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a recipe..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchMeals}>Search</button>
      </div>

      {/* Meal List Popup */}
      {showPopup && mealData.length > 0 && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={() => setShowPopup(false)}>×</button>
            <div className="meal-grid">
              {mealData.map((meal) => (
                <div key={meal.idMeal} className="meal-card" onClick={() => handleMealClick(meal)}>
                  <img src={meal.strMealThumb} alt={meal.strMeal} />
                  <h3>{meal.strMeal}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Detailed Recipe Popup */}
      {selectedMeal && (
        <div className="popup">
          <div className="popup-content large">
            <button className="close-btn" onClick={() => setSelectedMeal(null)}>×</button>
            <h2>{selectedMeal.strMeal}</h2>
            <div className="solo-data">
              <img src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="meal-detail-img" />

              <div>
                <h3 className="text-center">Ingredients:</h3>
                <ul className="">
                  {Array.from({ length: 20 }).map((_, index) => {
                    const ingredient = selectedMeal[`strIngredient${index + 1}`];
                    const measure = selectedMeal[`strMeasure${index + 1}`];
                    return ingredient && ingredient.trim() ? (
                      <li key={index}>{`${measure} ${ingredient}`}</li>
                    ) : null;
                  })}
                </ul>
              </div>

            </div>



            <h3>Instructions:</h3>
            <p>{selectedMeal.strInstructions}</p>

            {selectedMeal.strYoutube && (
  <div className="video-container">
    <h3>Watch Recipe Video:</h3>
    <iframe
      width="100%"
      height="315"
      src={`https://www.youtube.com/embed/${selectedMeal.strYoutube.split("v=")[1]}`}
      title="Recipe Video"
      frameBorder="0"
      allowFullScreen
    ></iframe>
  </div>
)}

            {selectedMeal.strSource && (
              <div>
                <h3>Source:</h3>
                <a href={selectedMeal.strSource} target="_blank" rel="noopener noreferrer">
                  View Original Recipe
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
