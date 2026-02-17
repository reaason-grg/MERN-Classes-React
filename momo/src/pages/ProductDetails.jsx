import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../context/CartProvider";

const ProductDetails = () => {
  const { state } = useLocation();
  const {cart,dispatch}=useContext(CartContext);
  console.log(cart)
  const recipe = state;

  if (!recipe) {
    return <div className="py-40 text-center text-2xl">No Product Found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-3xl overflow-hidden">
        <div className="grid md:grid-cols-2 gap-10 p-8">
          {/* Image Section */}
          <div className="flex justify-center items-center">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full max-w-md rounded-2xl shadow-lg hover:scale-105 transition duration-300"
            />
          </div>

          {/* Details Section */}
          <div className="flex flex-col justify-between space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-4xl font-bold text-gray-800">
                {recipe.name}
              </h1>
              <p className="text-lg text-gray-500 mt-2">
                {recipe.cuisine} • {recipe.difficulty}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-gray-500">Prep Time</p>
                <p className="font-semibold">{recipe.prepTimeMinutes} mins</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-gray-500">Cook Time</p>
                <p className="font-semibold">{recipe.cookTimeMinutes} mins</p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-gray-500">Calories</p>
                <p className="font-semibold">
                  {recipe.caloriesPerServing} kcal
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-xl">
                <p className="text-gray-500">Servings</p>
                <p className="font-semibold">{recipe.servings}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-3">
              <span className="text-yellow-500 text-xl">⭐</span>
              <span className="font-semibold">{recipe.rating}</span>
              <span className="text-gray-500">
                ({recipe.reviewCount} reviews)
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {recipe.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Button */}
            <button className="bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-2xl text-lg font-semibold transition active:scale-95" onClick={()=>{
              dispatch({type:"add-item",payload:recipe});
            }}>
              Add To Cart
            </button>
          </div>
        </div>

        {/* Ingredients & Instructions */}
        <div className="border-t p-8 grid md:grid-cols-2 gap-10 bg-gray-50">
          {/* Ingredients */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {recipe.ingredients?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {recipe.instructions?.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;