


type ProductType = {
  name:string,
  price:number,
  imageURL:string
}

function Card({name, price, imageURL} : ProductType) {
  return (
    <div>
        <img src={imageURL} alt={name} />
        <h3>{name}</h3>
        <p>{price}</p>
    </div>
  )
}

export default Card