import React from "react";
import { addToCart } from "../../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Card = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = product => {
        dispatch(addToCart({ ...product, quantity: 1 }));
        console.log(product);
    };

    return (
        <div
            key={product.id}
            className="card bg-base-100 w-full shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
            <figure>
                <img
                    src={product.images[0]}
                    alt="product"
                    className="w-full h-48 object-contain rounded-t-lg"
                />
            </figure>
            <div className="card-body p-4 space-y-4">
                <h2 className="card-title text-lg font-semibold line-clamp-1">
                    {product.title}
                    <div className="badge badge-secondary ml-2">
                        {product.category}
                    </div>
                </h2>
                <p className="text-sm text-gray-600 line-clamp-2">
                    {product.description}
                </p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline font-bold text-lg">
                        ${product.price}
                    </div>
                </div>
            </div>
            <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-primary">
                Add to cart
            </button>
        </div>
    );
};

export default Card;
