import React from 'react'
import Header from './sections/Header'
import Category from './sections/Category'
import Footer from './sections/Footer'
import Types from './sections/Types'
import Services from './sections/Services'
import Productgrid from './sections/Productgrid'
import Banner from './sections/Banner'
import Reviews from './sections/Reviews'
import Insta from './sections/Insta'
import Hero from './sections/HEro'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Category />
      <Types />
      <Services />
      <Productgrid />
      <Banner />
      <Reviews />
      <Insta />
      <Footer />
    </>
  )
}

export default App