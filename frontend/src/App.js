import GlobalStyles from "./components/GlobalStyles";
import { Route, Routes } from "react-router-dom";
import SellPage from "./components/SellPage";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import IndivisualProductScreen from "./screens/IndivisualProductScreen";
import Footer from "./components/Footer";
import IndivisualCategoryScreen from "./screens/IndivisualCategory";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/product/:id" element={<IndivisualProductScreen />} />
        <Route path="/" element={<HomeScreen />} />
        <Route path="/sell" element={<SellPage />} />
        <Route
          path="/category/category"
          element={<IndivisualCategoryScreen />}
        />
      </Routes>
      <div style={{ marginTop: "10rem" }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
