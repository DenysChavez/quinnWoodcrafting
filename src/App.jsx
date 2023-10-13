import {Header, Navbar, Categories, Footer, Gallery, NewProducts, Testimonials} from './components'
const App = ({ reviews, products }) => {
  
  return (
    <>
      <Header />
      <Testimonials reviews={reviews} />
      <NewProducts products={products} />
      <Categories />
      {/* <Gallery /> */}
      {/* <Footer />  */}
    </>
  )
}

export default App;
