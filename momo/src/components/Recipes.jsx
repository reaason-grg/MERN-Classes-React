import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/recipes?limit=10");
      setRecipes(res.data.recipes);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipes();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div className="max-w-6xl mx-auto py-10">
      {recipes.length > 0 ? (
        <Slider {...settings}>
          {recipes.map((recipe) => (
            <div key={recipe.id} className="flex flex-col items-center gap-4 p-4">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-80 rounded-lg"
              />
              <h2 className="text-xl font-semibold">{recipe.name}</h2>
              <h3 className="text-orange-700 text-2xl font-bold">
                {recipe.caloriesPerServing} Calories
              </h3>
            </div>
          ))}
        </Slider>
      ) : (
        <div className="text-center">No Recipes</div>
      )}
    </div>
  );
};

export default Recipes;
