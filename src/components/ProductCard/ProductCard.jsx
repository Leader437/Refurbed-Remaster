import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="relative p-8 overflow-hidden min-h-72 flex flex-col"
    >
      {product.tag && (
        <div className="absolute top-2 left-2 p-1 bg-green-600 text-white text-xs font-normal rounded-sm z-10">
          {product.tag}
        </div>
      )}
      <div className="flex-grow flex items-center justify-center">
        <img
          src={product.image}
          alt={product.name}
          className="w-full object-contain h-48"
        />
      </div>
      <div className="p-4 text-left">
        <h3 className="text-lg font-medium">{product.name}</h3>
        <p className="text-green-700 font-semibold text-md mt-1">
          €{product.currentPrice.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
