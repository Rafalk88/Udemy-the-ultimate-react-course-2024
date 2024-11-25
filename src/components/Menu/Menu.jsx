import { Pizza } from './Pizza';
import { pizzaData } from '../../data';

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious</p>
      {pizzaData.length === 0 ? (
        <p>No pizzas available at the moment.</p>
      ) : (
        <ul className="pizzas">
          {
            pizzaData.map((pizza) => (
              <Pizza key={pizza.id} {...pizza} />
            ))
          }
        </ul>
      )
      }
    </main>
  )
}

export { Menu };
