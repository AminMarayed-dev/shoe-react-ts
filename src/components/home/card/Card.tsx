
import { ProductType } from '../type'

function Card({product} : ProductType) {
  return (
    <div>
        <img src={product.imageURL} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
    </div>
  )
}

export default Card