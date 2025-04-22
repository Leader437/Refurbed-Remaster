import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "./features/products/productSlice";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import { fetchAllProducts } from "./features/products/fetchProduct"; 
import ProductDetails from "./pages/productDetails/productDetails";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = () => {
      try {
        const data = fetchAllProducts();
        dispatch(setProducts(data));
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/p/:id" element={<ProductDetails/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
