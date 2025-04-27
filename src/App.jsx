import { useEffect } from "react";
import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProducts } from "./features/products/productSlice";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";
import { fetchAllProducts } from "./features/products/fetchProduct";
import ProductDetails from "./pages/productDetails/productDetails";
import Cart from "./pages/Cart/Cart";
import { Toaster } from "sonner";
import Contact from "./pages/Contact/Contact";
import Categories from "./pages/Categories/Categories";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import OrderTracking from "./pages/OrderTracking/OrderTracking";

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

  const location = useLocation();
  const hideHeaderFooterRoutes = ["/cart", "/login", "/signup"];
  const shouldHideHeaderFooter = hideHeaderFooterRoutes.includes(
    location.pathname
  );

  return (
    <>
      <Toaster position="bottom-right" />
      {!shouldHideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/p/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/c/:category" element={<Categories />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/order-tracking" element={<OrderTracking />} />
      </Routes>
      {!shouldHideHeaderFooter && <Footer />}
    </>
  );
}

export default App;
