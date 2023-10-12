import {Header, Navbar, Categories, Footer, Gallery, NewProducts, Testimonials} from './components'
const App = ({ reviews }) => {
  
  return (
    <>
      <Header />
      <Testimonials reviews={reviews} />
      <NewProducts />
      {/* <Categories /> */}
      {/* <Gallery /> */}
      {/* <Footer />  */}
    </>
  )
}

export default App;
