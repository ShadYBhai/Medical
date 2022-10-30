import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import SellPage from "./components/SellPage";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import IndivisualProductScreen from "./screens/IndivisualProductScreen";
import Footer from "./components/Footer";
import IndivisualCategoryScreen from "./screens/IndivisualCategory";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import OrderScreen from "./screens/OrderScreen";
import ProductsScreen from "./screens/ProductsScreen";
import CartScreen from "./screens/CartScreen";
import LoginScreen from "./screens/LoginScreen";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/product/:id" element={<IndivisualProductScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sell" element={<SellPage />} />
        <Route path="/category/:id" element={<IndivisualCategoryScreen />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/orders" element={<OrderScreen />} /> */}
        <Route path="/product/:id" element={<ProductsScreen />} />
        <Route path="/cart/:id" element={<CartScreen />} />
        <Route path="/cart/" element={<CartScreen />} />
        <Route path="/all" element={<ProductsScreen />} />
      </Routes>
      <div style={{ marginTop: "10rem" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
