import React from "react";
import HeroComponent from "../components/HeroComponent";
import { Container } from "react-bootstrap";
import ProductsScreen from "./ProductsScreen";
import Categories from "../components/Categories";

//REFERANCE APP JS FILE

const HomeScreen = () => {
  return (
    <>
      <Container>
        <main className="py-3">
          <HeroComponent />
        </main>
        <Categories />
        <ProductsScreen />
      </Container>
    </>
  );
};

export default HomeScreen;
