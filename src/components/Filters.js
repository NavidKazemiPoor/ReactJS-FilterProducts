import { useGlobalContext } from "../context";
import "./../css/Filters.css";

const Filters = () => {
  const { filter, filterProduct, filterText } = useGlobalContext();
  const tags = ["همه", ...new Set(filter.map((item) => item.tag))];
  return (
    <section className="container filter-container flex">
      <div className="center f">
        {tags.map((tag, index) => {
          return (
            <p
              key={index}
              className={`tags ${filterText === tag ? "active" : ""}`}
              onClick={() => filterProduct(tag)}
            >
              {tag}
            </p>
          );
        })}
      </div>
    </section>
  );
};

export default Filters;
