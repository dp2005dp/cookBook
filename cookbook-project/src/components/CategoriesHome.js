import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Categories.css";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setCategories(data.categories))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <div className="categories-container">
      <h2 className="category-title">Browse Recipes by Category</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <Link key={category.idCategory} to={`/category/${category.strCategory}`} className="category-card">
            <img src={category.strCategoryThumb} alt={category.strCategory} />
            <h3>{category.strCategory}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
