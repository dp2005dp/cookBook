import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To access route parameters
import "../styles/Categories.css"; // Import your CSS styles

const CategoryDetail = () => {
  const { id } = useParams(); // Get category or ingredient name from the URL
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMeal, setSelectedMeal] = useState(null); // Store selected meal for popup
  const [showModal, setShowModal] = useState(false); // Toggle modal visibility

  useEffect(() => {
    // Fetch meals based on category or ingredient
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals && data.meals.length > 0) {
          setMeals(data.meals); // Set the meals data
        } else {
          setError("No meals found for this ingredient/category.");
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching meals:", err);
        setError("Failed to load meal data.");
        setLoading(false);
      });
  }, [id]);

  // Fetch detailed meal information for the selected meal
  const handleMealClick = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
      .then((res) => res.json())
      .then((data) => {
        const mealDetails = data.meals[0];
        setSelectedMeal(mealDetails);
        setShowModal(true); // Open the modal
      })
      .catch((err) => {
        console.error("Error fetching meal details:", err);
        setError("Failed to load meal details.");
      });
  };

  // Close the modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedMeal(null);
  };
  // Extract YouTube video ID from URL to embed in iframe
  const extractYouTubeID = (url) => {
    const regExp = /(?:https?:\/\/(?:www\.)?youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S+\/)?(\S+))|(?:https?:\/\/(?:www\.)?youtu\.be\/(\S+))/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  };
  return (
    <div className="category-detail-container">
      <h2>Meals with {id}</h2>

      {/* Show loading or error message */}
      {loading && <p>Loading meals...</p>}
      {error && <p className="error">{error}</p>}

      {/* Display meal cards */}
      {meals.length > 0 && (
        <div className="meals-grid">
          {meals.map((meal) => (
            <div
              key={meal.idMeal}
              className="meal-card"
              onClick={() => handleMealClick(meal.idMeal)} // Open modal on click
            >
              <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
              <h3 className="meal-title">{meal.strMeal}</h3>
            </div>
          ))}
        </div>
      )}

      {/* Modal for showing meal details */}
      {showModal && selectedMeal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times; {/* Close icon */}
            </button>
            <h3>{selectedMeal.strMeal}</h3>
            <div className="" style={{display:'flex', justifyContent:'space-around'}}>
              <img style={{ height: '400px', width: '400px' }} src={selectedMeal.strMealThumb} alt={selectedMeal.strMeal} className="modal-image" />
                        {/* YouTube video */}
     {selectedMeal.strYoutube && (
              <div className="youtube-video" style={{height:'100px  ', width:'100px '}}>
                <h4>Watch the Recipe:</h4>
                <iframe
                  width="300"
                  height="315"
                  // src={`https://www.youtube.com/embed/${extractYouTubeID(selectedMeal.strYoutube)}`}
      src={`https://www.youtube.com/embed/${selectedMeal.strYoutube.split("v=")[1]}`}

                  frameBorder="0"
                  allowFullScreen
                  title="YouTube Video"
                ></iframe>
              </div>
            )} 
              {/* List Ingredients */}
              <div className="ingredients-list">
                <h4>Ingredients:</h4>
                <ul>
                  {[...Array(20).keys()].map((index) => {
                    const ingredient = selectedMeal[`strIngredient${index + 1}`];
                    const measure = selectedMeal[`strMeasure${index + 1}`];
                    if (ingredient) {
                      return (
                        <li key={index}>
                          {ingredient} - {measure}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
        
              </div>

           
            </div>

            <p><strong>Instructions:</strong> {selectedMeal.strInstructions}</p>


          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryDetail;
