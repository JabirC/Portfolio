import { useState } from 'react'

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Experience from './components/Experience';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header />
        <Home />
        <Experience />
        <Footer/>
    </>
  )
}

export default App;
