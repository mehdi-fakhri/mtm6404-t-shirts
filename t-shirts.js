const { useState } = React

function App() {
  const [shirts, setShirts] = useState(tshirts)

  function changeQuantity(title, quantity) {
    setShirts(shirts.map(shirt => {
      if (shirt.title === title) {
        return { ...shirt, quantity: quantity }
      }
      return shirt
    }))
  }

  function buyShirt(title) {
    setShirts(shirts.map(shirt => {
      if (shirt.title === title) {
        return { ...shirt, stock: shirt.stock - shirt.quantity, quantity: 1 }
      }
      return shirt
    }))
  }


  return (
    <div className="App">

      <h1>My TShirt Shop</h1>

      {shirts.map((shirt) => (

        <TShirts key={shirt.title} shirt={shirt} changeQuantity={changeQuantity} buyShirt={buyShirt} />

      ))}
    </div>
  )

}

function TShirts(props) {
  const options = []

  for (let i = 1; i <= props.shirt.stock; i++) {
    options.push(<option key={i} value={i}>{i}</option>)
  }

  function quantityHandler(e) {
    props.changeQuantity(props.shirt.title, parseInt(e.target.value))
  }

function buyHandler() {
  props.buyShirt(props.shirt.title)
}


return (

  <div >
    <img src={'images/' + props.shirt.image} alt={props.shirt.title} />
    <h2>{props.shirt.title}</h2>
    <p> $ {props.shirt.price}</p>
    {props.shirt.stock === 0 ? ("Out of Stock"): (<div > <p>{props.shirt.stock} left!</p>
      <select 
        value={props.shirt.quantity} onChange={quantityHandler}>
        {options}
      </select>
      <button onClick={buyHandler}>Buy</button>
      </div>
)}
    </div>)} 



      const tshirts = [
      {
        title: 'Blue T-Shirt',
      image: 'blue-t-shirt.jpg',
      price: 7.99,
      stock: 4,
      quantity: 1
  },
      {
        title: 'Bright Purple T-Shirt',
      image: 'bright-purple-t-shirt.jpg',
      price: 5.99,
      stock: 1,
      quantity: 1
  },
      {
        title: 'Cobalt Blue T-Shirt',
      image: 'cobalt-blue-t-shirt.jpg',
      price: 9.99,
      stock: 5,
      quantity: 1
  },
      {
        title: 'Green T-Shirt',
      image: 'green-t-shirt.jpg',
      price: 6.99,
      stock: 0,
      quantity: 1
  },
      {
        title: 'Grey T-Shirt',
      image: 'blue-t-shirt.jpg',
      price: 4.99,
      stock: 2,
      quantity: 1
  },
      {
        title: 'Light Green T-Shirt',
      image: 'light-green-t-shirt.jpg',
      price: 7.99,
      stock: 4,
      quantity: 1
  },
      {
        title: 'Purple T-Shirt',
      image: 'purple-t-shirt.jpg',
      price: 7.99,
      stock: 0,
      quantity: 1
  },
      {
        title: 'Red T-Shirt',
      image: 'red-t-shirt.jpg',
      price: 6.99,
      stock: 3,
      quantity: 1
  },
      {
        title: 'Teal T-Shirt',
      image: 'teal-t-shirt.jpg',
      price: 7.99,
      stock: 2,
      quantity: 1
  }
      ]
      const root = ReactDOM.createRoot(document.getElementById('root'))
      root.render(<App />)

