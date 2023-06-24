// @ts-nocheck

import Router from "preact-router";
import HomePage from "./pages/home-page";
import Footer from "./components/footer";
import Header from "./components/header";
import Gallery from "./pages/gallery";

function App() {
  return (
    <>
      <Header />
      <Router>
        <HomePage path="/" />
        <Gallery path="/gallery" />
        <HomePage path="/contact" />
      </Router>
      <Footer />
    </>
  );
}

export default App;
