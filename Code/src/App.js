import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Recipe from "./pages/Recipe";
import Category from "./pages/Category";
import Navbar from "./components/Navbar";  // Ensure correct path
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Newsletter from "./components/NewsLetter";
import Recipes from "./components/Recipes";
import Search from "./components/Search";
import NewCategorys from "./pages/Categorys";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<Recipe />} />
        <Route path="/category/:id" element={<Category />} /> 
        <Route path="/categorys" element={<NewCategorys />} /> 
        <Route path="/search" element={<Search />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/newsletter" element={<Newsletter />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
