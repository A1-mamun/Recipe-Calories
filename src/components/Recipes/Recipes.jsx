import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("Recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="w-3/5 grid grid-cols-2 gap-5">
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
          handleCook={handleCook}
        ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleCook: PropTypes.func,
};
export default Recipes;
