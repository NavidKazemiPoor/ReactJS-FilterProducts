import { formatPrice } from "../utils/formatPrice";
import "./../css/product.css";
const Product = ({ name, price, img }) => {
  return (
    <article className="product f">
      <img src={img} alt="" />
      <div className="info f">
        <h3 className="title">{name}</h3>
        <h3 className="price">{formatPrice(price)} تومان</h3>
      </div>
      <button className="btn-add">اضافه به سبد خرید</button>
    </article>
  );
};

export default Product;
