import { useContext } from "react";
import { ProductContext } from "../Contexts/ProductContext.jsx"; // Correct import
import Product from "../Components/Product.jsx";
import Hero from "../Components/Hero.jsx";

const Home = () => {
  const { products } = useContext(ProductContext); // Use the imported ProductProvider

  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });

  return (
    <>
      <Hero />
      <section className="relative md:mt-[2rem] py-4">
        <div className="container mx-auto">
          <h1 className=" mb-6 text-center uppercase text-xl font-semibold">
            Trending Products
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => {
              return <Product product={product} key={product.id} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
