import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./pages/Products/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
