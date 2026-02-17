import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Menu = () => {
  const [recipes, setRecipes] = useState([]);
  const navigate=useNavigate();

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
  
  return (
    <div>
        <div className="flex justify-center items-center py-30 p-20">
      {recipes.length > 0 ? (
        <div className='grid grid-cols-3 gap-4'>
          {recipes.map((recipe) => (
            <div key={recipe.id} 
            className="flex flex-col items-center gap-4 p-4" 
            onClick={()=>{
              navigate(`/product-details/${recipe.id}`,{state:recipe});
            }}>
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
        </div>
      ) : (
        <div className="text-center">No Recipes</div>
      )}
    </div>
    </div>
  )
}

export default Menu;
