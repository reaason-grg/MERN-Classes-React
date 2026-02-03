import React from "react";
import { Star } from "lucide-react";

const Card = (props) => {
    return (
        <div className="w-80 border border-gray-400 m-5 p-5 rounded-lg">
            <img
                src={props.img}
                alt={props.title}
                className="w-full"
            />

            <div className="flex my-2 gap-2">
                <Star color="#fbff00" />
                <Star color="#fbff00" />
                <Star color="#fbff00" />
                <Star color="#fbff00" />
                <Star color="#fbff00" />
            </div>

            <a href="" className="text-xl font-bold">{props.title}</a>

            <p className="duration">⏱ {props.duration}</p>

            <div className="my-4">
                <div className="avatar">SI</div>
                <div className="author-text">
                    By <span className="hover:text-blue-700">Sipalaya InfoTech</span> in <span className="hover:text-blue-700"> {props.category}</span>
                </div>
            </div>

            <hr className="text-gray-400"/>

            <div className="flex justify-between">
                <span className="text-orange-600 text-xl font-semibold">Rs.{props.original}</span>
                <span className="price">Rs.{props.price}</span>

                <button className="bg-blue-700 text-white rounded-sm active:scale-95">Add to cart</button>
            </div>

            
        </div>
    );
};

export default Card;