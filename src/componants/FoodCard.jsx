import React from 'react';

const FoodCard = ({item}) => {
    const {name, image, price, recipe} = item;
    return (
        <div className="card w-full bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="absolute bg-orange-500 hover:bg-orange-700 text-white right-0 mr-4 mt-4 px-4 rounded py-2">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn btn-outline border-0 border-b-4">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;