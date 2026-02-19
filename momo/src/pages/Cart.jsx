import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { Navigate, useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);
  const navigate=useNavigate();

  
  const totalAmount=cart.cartItems.reduce(
    (total,item) => total+item.caloriesPerServing*item.quantity,
    0,
  );

  return (
    <div className="min-h-screen bg-gray-100 py-30 px-4">
      <div className="max-w-6xl mx-auto">
        {cart.cartItems.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="md:col-span-2 space-y-6">
              {cart.cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-white p-6 rounded-xl shadow-md"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-6">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div>
                      <h2 className="text-lg font-semibold text-gray-800">
                        {item.name}
                      </h2>
                      <p className="text-gray-500">Rs. {item.caloriesPerServing}</p>
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-4">
                    <button className="w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 transition"
                      onClick={()=>{
                        dispatch({type:"decrement",payload:item.id })
                    }}>
                      -
                    </button>
                    <span className="text-lg font-medium">{item.quantity}</span>
                    <button className="w-8 h-8 bg-gray-200 rounded-md hover:bg-gray-300 transition" 
                    onClick={()=>{
                        dispatch({type:"increment",payload:item.id })
                    }}>
                      +
                    </button>
                  </div>

                  {/* Delete Button */}
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  onClick={()=>{
                    dispatch({type:"remove-item",payload:item.id})
                  }}>
                    Delete
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-xl shadow-md h-fit">
              <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Order Summary
              </h2>

              <div className="flex justify-between mb-2 text-gray-600">
                <span>Total Items</span>
                <span>{cart.cartItems.length}</span>
              </div>

              <div className="flex justify-between text-lg font-semibold border-t pt-4">
                <span>Total Amount</span>
                <span>Rs. {totalAmount}</span>
              </div>

              <button className="w-full mt-6 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
              onClick={()=>
              {
                navigate("/payment",{state:totalAmount})
              }
              }>
                Proceed to Checkout
              </button>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-gray-600">
              No Items in Cart
            </h2>
            <p className="text-gray-400 mt-2">
              Add some products to your cart.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;