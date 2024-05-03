
import products from "../../../database/Products";
import Card from "./Card";

function CardProducts() {
  return (
    <div>
      {products.map((product) => (
        <Card
          key={product.id}
          name={product.name}
          price={product.price}
          imageURL={product.imageURL}
        />
      ))}
    </div>
  );
}

export default CardProducts;
