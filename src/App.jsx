import { Route, Routes } from "react-router-dom";
import { Header, Footer, Gallery, NewProducts } from "./components";
import { AboutUs, Events, ProductsPage, FAQs } from "./pages";

const App = ({ reviews, products }) => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/faqs" element={<FAQs />} />
      </Routes>
      <NewProducts products={products} />
      <Gallery />
      <Footer />
    </>
  );
};

export default App;
