function Pizza({
  name, ingredients, price, photoName, soldOut
}) {
  return (
    <li className={`pizza ${soldOut ? 'sold-out': ''}`}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? ('sold out').toUpperCase() : `${price}$`}</span>
      </div>
    </li>
  )
}

export { Pizza };
