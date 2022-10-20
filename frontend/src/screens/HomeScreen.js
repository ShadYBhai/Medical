import React from "react";
import Footer from "../components/Footer";
import HeroComponent from "../components/HeroComponent";
import { Container } from "react-bootstrap";
import ProductsScreen from "./ProductsScreen";
//REFERANCE APP JS FILE

const HomeScreen = () => {
  return (
    <>
      <Container>
        <main className="py-3">
          <HeroComponent />
        </main>
        <ProductsScreen />
      </Container>
      <Footer />
    </>
  );
};

export default HomeScreen;
