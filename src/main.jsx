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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App reviews={reviews} />
  </React.StrictMode>,
)
