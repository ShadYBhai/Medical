import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import GlobalStyles from "./components/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main className="py-3">
        <Container>
          <h1>Hello Shady Here</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
