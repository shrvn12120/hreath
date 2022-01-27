import React from 'react'
import Home from './components/Home'
import Explore from './components/Explore'
import Rooms from './components/Rooms'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Island from './components/Island'

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Island />
      {/* <Explore /> */}
      <Rooms />
      <Footer />
    </div>
  );
  
}

export default App;
