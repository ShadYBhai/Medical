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
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ShippingScreen from "./screens/ShippingScreen";
import PaymentScreen from "./screens/PaymentScreen";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";
import OrderScreen from "./screens/OrderScreen";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/order/:id" element={<OrderScreen />} />
        <Route path="/register" element={<RegisterScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
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
        <Route path="/cart" element={<CartScreen />} />
        <Route path="/all" element={<ProductsScreen />} />
        <Route path="/sell/shipping" element={<SellShippingScreen />} />
        <Route path="/login/shipping" element={<ShippingScreen />} />
        <Route path="/shipping" element={<ShippingScreen />} />
        <Route path="/payment" element={<PaymentScreen />} />
        <Route path="/placeorder" element={<PlaceOrderScreen />} />
      </Routes>
      <div style={{ marginTop: "10rem" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
