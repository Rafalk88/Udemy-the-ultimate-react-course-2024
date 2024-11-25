function Pizza({
  name, ingredients, price, photoName, soldOut
}) {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}$</span>
      </div>
    </li>
  )
}

export { Pizza };
