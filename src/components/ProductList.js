import Product from "./Product";
import { useGlobalContext } from "../context";
import "./../css/productlist.css";

const ProductList = () => {
  const { product } = useGlobalContext();
  return (
    <main className="container product-container flex">
      <div className="center product-center">
        {product.map((item, index) => {
          return <Product key={index} {...item} />;
        })}
      </div>
    </main>
  );
};

export default ProductList;
