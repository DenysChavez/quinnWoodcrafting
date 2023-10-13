import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const reviews = [
  {
    id: 1,
    product_id: 205,
    product_name: "Whiskey Smoker",
    rate: 5,
    user_id: 7856,
    user_name: "Micho Bonito",
    review: "sdfjhsdjkalfhjksdalfhjksadlryireluhjsdfksljhafjksd",
    date: "08/05/1996"
  },
  {
    id: 2,
    product_id: 2045,
    product_name: "Cutting Board",
    rate: 5,
    user_id: 75856,
    user_name: "Dan Bonito",
    review: "sdfjhsdjsdfsadfkalfhjksdalfhjksadlryireluhjsdfksljhafjksd",
    date: "09/10/1996"
  },
  {
    id: 3,
    product_id: 285,
    product_name: "Plant Holder",
    rate: 5,
    user_id: 756,
    user_name: "Dan y Micho Bonito",
    review: "sdfjhsadfsadfsdjkalfhjksdalfhjksadlryireluhjsdfksljhafjksd",
    date: "10/28/2015"
  }
]

const products = [
  {
    id: 244354,
    img: "https://m.media-amazon.com/images/I/91iLajROOwL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "kjhfkjahsdfkjsad",
    price: 9.99,
    name: "Cutting Board",
    link: "#"
  },
  {
    id: 3232454,
    img: "https://m.media-amazon.com/images/I/91g8Ei8ouAL.__AC_SY300_SX300_QL70_FMwebp_.jpg",
    description: "kjhfkjahsdfkjsad",
    price: 9.99,
    name: "Cheese Board",
    link: "#"
  },
  {
    id: 3252454,
    img: "https://m.media-amazon.com/images/I/81nNtyhebRL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "kjhfkjahsdfkjsad",
    price: 9.99,
    name: "Micho's board",
    link: "#"
  },
  {
    id: 3243465478,
    img: "https://m.media-amazon.com/images/I/81nNtyhebRL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Micho's board",
    description: "kjhfkjahsdfkjsad",
    price: 9.99,
    link: "#"
  },
  {
    id: 322054,
    img: "https://m.media-amazon.com/images/I/81nNtyhebRL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    description: "kjhfkjahsdfkjsad",
    price: 9.99,
    name: "Micho's board",
    link: "#"
  },
  {
    id: 24433154,
    img: "https://m.media-amazon.com/images/I/91iLajROOwL.__AC_SX300_SY300_QL70_FMwebp_.jpg",
    name: "Cutting Board",
    description: "kjhfkjahsdfkjsad",
    price: 9.99,
    link: "#"
  },


]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App reviews={reviews} products={products} />
  </React.StrictMode>,
)
