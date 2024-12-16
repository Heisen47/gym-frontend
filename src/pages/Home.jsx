import React from 'react'
import Hero from '../components/Hero'
import Body from '../components/Body'

const Home = () => {
  return (
    <>
    <Hero />
    <div className="container mx-auto p-4">
      {/* <p></p> */}
      <Body />
    </div>
  </>
  )
}

export default Home