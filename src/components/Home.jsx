import React from 'react'
import NavBarMain from './layout/NavBarMain'
import EventsHero from './EventsHero '
import Events from './Events'
import Footer from "./layout/Footer";

const Home = () => {
  return (
    <div>
      <NavBarMain />
      <EventsHero />
      <Events />
      <Footer />
    </div>
  )
}

export default Home