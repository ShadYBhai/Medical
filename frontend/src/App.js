import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import GlobalStyles from "./components/GlobalStyles";
import HeroComponent from "./components/HeroComponent";
import { Route, Routes } from "react-router-dom";
import SellPage from "./components/SellPage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/sell" element={<SellPage />} />
      </Routes>
      <Header />
      <main className="py-3">
        <Container>
          <HeroComponent />
          <h1>Hello Shady Here</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
