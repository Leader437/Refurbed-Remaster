import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import iphoneImg from "../../assets/product-images/iphone.webp";
import BorderButton from "../BorderButton/BorderButton";

const ProductList = () => {
  const [sortOption, setSortOption] = useState("Most Popular");
  const [visibleCount, setVisibleCount] = useState(8);

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "iPhone 13",
      price: 332.99,
      image: iphoneImg,
      popularity: 3,
      tag: "Bestseller",
    },
    {
      id: 2,
      name: "iPhone 15",
      price: 595.99,
      image: iphoneImg,
      popularity: 2,
    },
    {
      id: 3,
      name: "iPhone 14",
      price: 406.99,
      image: iphoneImg,
      popularity: 1,
    },
    {
      id: 4,
      name: "iPhone 14 Pro",
      price: 569.99,
      image: iphoneImg,
      popularity: 4,
    },
    {
      id: 5,
      name: "iPhone SE (2020)",
      price: 199.99,
      image: iphoneImg,
      popularity: 5,
      tag: "Budget",
    },
    {
      id: 6,
      name: "iPhone 12 Mini",
      price: 299.99,
      image: iphoneImg,
      popularity: 6,
    },
    {
      id: 7,
      name: "iPhone 11",
      price: 249.99,
      image: iphoneImg,
      popularity: 7,
      tag: "Popular",
    },
    {
      id: 8,
      name: "iPhone XR",
      price: 219.99,
      image: iphoneImg,
      popularity: 8,
    },
    {
      id: 9,
      name: "iPhone XS",
      price: 279.99,
      image: iphoneImg,
      popularity: 9,
    },
    {
      id: 10,
      name: "iPhone 12 Pro Max",
      price: 699.99,
      image: iphoneImg,
      popularity: 10,
      tag: "Premium",
    },
    {
      id: 11,
      name: "iPhone 13 Mini",
      price: 349.99,
      image: iphoneImg,
      popularity: 11,
    },
    {
      id: 12,
      name: "iPhone 12",
      price: 319.99,
      image: iphoneImg,
      popularity: 12,
    },
    {
      id: 13,
      name: "iPhone 11 Pro",
      price: 399.99,
      image: iphoneImg,
      popularity: 13,
    },
    {
      id: 14,
      name: "iPhone SE",
      price: 229.99,
      image: iphoneImg,
      popularity: 14,
      tag: "Budget",
    },
    {
      id: 15,
      name: "iPhone X",
      price: 259.99,
      image: iphoneImg,
      popularity: 15,
    },
    {
      id: 16,
      name: "iPhone 8 Plus",
      price: 199.99,
      image: iphoneImg,
      popularity: 16,
    },
    {
      id: 17,
      name: "iPhone 7",
      price: 149.99,
      image: iphoneImg,
      popularity: 17,
    },
    {
      id: 18,
      name: "iPhone 6S",
      price: 99.99,
      image: iphoneImg,
      popularity: 18,
    },
    {
      id: 19,
      name: "iPhone 6",
      price: 89.99,
      image: iphoneImg,
      popularity: 19,
    },
    {
      id: 20,
      name: "iPhone 5S",
      price: 49.99,
      image: iphoneImg,
      popularity: 20,
    },
  ]);

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "Lowest Price") return a.price - b.price;
    if (sortOption === "Highest Price") return b.price - a.price;
    return b.popularity - a.popularity;
  });

  const visibleProducts = sortedProducts.slice(0, visibleCount);

  return (
    <div className="container py-10">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
        <div>
          <h2 className="text-lg font-semibold">
            Refurbed products with a minimum warranty of 12 months
          </h2>
          <div className="flex items-center gap-2 mt-2 text-blue-700 font-medium">
            <FaTruck />
            <span>Delivery included</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-gray-600">Sort by:</label>
          <div className="relative inline-block">
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 text-custom-dark-text text-sm font-light rounded-md px-4 py-2 pr-8 appearance-none cursor-pointer"
            >
              <option>Most Popular</option>
              <option>Lowest Price</option>
              <option>Highest Price</option>
            </select>
            <BsChevronDown className="absolute right-2 top-3 pointer-events-none text-gray-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {visibleProducts.map((product) => (
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
                €{product.price.toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < sortedProducts.length && (
        <div className="mt-8 text-center">
          <BorderButton onclick={handleShowMore}>More</BorderButton>
        </div>
      )}
    </div>
  );
};

export default ProductList;
