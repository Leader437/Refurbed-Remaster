import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { BsChevronDown } from "react-icons/bs";
import ProductCard from "../../components/ProductCard/ProductCard";
import RecommendedForYou from "../../components/RecommendedForYou/RecommendedForYou";
import Review from "../../components/Review/Review";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const priceRanges = [
  { label: "€0 - 100", min: 0, max: 100 },
  { label: "€100 - 200", min: 100, max: 200 },
  { label: "€200 - 300", min: 200, max: 300 },
  { label: "€300 - 500", min: 300, max: 500 },
  { label: "€500+", min: 500, max: Infinity },
];

const Categories = () => {
  const { category } = useParams();
  const allProducts = useSelector((state) => state.products.allProducts);

  const [categoryProducts, setCategoryProducts] = useState([]);
  const [sortOption, setSortOption] = useState("Most Popular");
  const [selectedPrice, setSelectedPrice] = useState(null);

  useEffect(() => {
    const filtered = allProducts.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
    setCategoryProducts(filtered);
  }, [allProducts, category]);

  // Filter by price
  const filteredByPrice = selectedPrice
    ? categoryProducts.filter(
        (product) =>
          product.currentPrice >= selectedPrice.min &&
          product.currentPrice < selectedPrice.max
      )
    : categoryProducts;

  // Sort
  const sortedProducts = [...filteredByPrice].sort((a, b) => {
    if (sortOption === "Lowest Price") return a.currentPrice - b.currentPrice;
    if (sortOption === "Highest Price") return b.currentPrice - a.currentPrice;
    return b.popularity - a.popularity;
  });

  return (
    <>
      <div className="container py-10">
        <h1 className="text-3xl font-bold mb-2 capitalize">{category}:</h1>
        <p className="text-gray-600 mb-6">
          High-quality refurbished {category} at a great price. Your more
          sustainable choice, with a minimum 12-month warranty.
        </p>

        <div className="flex flex-col md:flex-row justify-between md:items-center">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-4">
            <div>
              <h2 className="font-semibold mb-2">
                Filter by: <span className="font-bold">Price</span>
              </h2>
              <div className="flex flex-wrap gap-2">
                {priceRanges.map((price, id) => (
                  <button
                    key={id}
                    className={`border border-gray-300 px-4 py-2 rounded-full text-sm ${
                      selectedPrice?.label === price.label
                        ? "bg-custom-pri-light text-white border-custom-pri-light"
                        : ""
                    }`}
                    onClick={() =>
                      setSelectedPrice(
                        selectedPrice?.label === price.label ? null : price
                      )
                    }
                  >
                    {price.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm font-medium text-gray-600 whitespace-nowrap">
              Sort by:
            </label>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sortedProducts.map((product) => (
            <Link to={`/p/${product.id}`} key={product.id}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
      <RecommendedForYou />
      <Review/>
      <NewsLetter/>
    </>
  );
};

export default Categories;
