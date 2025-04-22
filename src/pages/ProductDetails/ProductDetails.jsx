import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductView from "../../components/ProductView/ProductView";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
import RefurbProcess from "../../components/RefurbProcess/RefurbProcess";
import bgImg from "./../../assets/background-images/refurbishment_process.webp";
import Review from "../../components/Review/Review";
import Faq from "../../components/Faq/Faq";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const allProducts = useSelector((state) => state.products.allProducts);

  useEffect(() => {
    const foundProduct = allProducts.find(
      (product) => product.id === Number(id)
    );
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, allProducts]);

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <img
        src={bgImg}
        alt="refurbishment process"
        className="fixed top-0 left-0 w-screen h-screen -z-1"
      />
      <ProductView product={product} />
      <RecommendedProducts
        id={product.id}
        category={product.category}
        allProducts={allProducts}
      />
      <RefurbProcess />
      <Faq />
      <Review />
      <NewsLetter />
    </>
  );
};

export default ProductDetails;
