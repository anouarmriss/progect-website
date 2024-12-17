import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";

function App() {
  const products = [
    { id: 1, image: "product1.jpg", title: "Chair", price: 49 },
    { id: 2, image: "product2.jpg", title: "Table", price: 99 },
    { id: 3, image: "product3.jpg", title: "Lamp", price: 19 },
    // Ajoute d'autres produits ici
  ];

  return (
    <div>
      <Header />
      <HeroSection />
      <section className="product-list">
        <h2>Our Products</h2>
        <div className="products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
