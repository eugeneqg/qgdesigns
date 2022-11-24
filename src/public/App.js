import './App.sass';
import React, { useState, useEffect } from 'react';
import Header from '../components/header/header';
import Main from '../components/main/main';
import About from '../components/about/about';
import Portfolio from '../components/portfolio/portfolio';
import Contacts from '../components/contacts/contacts';
import Footer from '../components/footer/footer';

function App() {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    function onScroll() {
      let currentPosition = window.pageYOffset;
      if (currentPosition > scrollTop) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const goToTopBtn = scrolling ? <button onClick={goToTop} id="fixedbtn"><img src={process.env.PUBLIC_URL + "images/arrow.svg"} alt="arrow"/></button> : null

  
  return (
    <div className="App">
      {goToTopBtn}
      <Header/>
        <Main/>
        <div className='container'>
          <About/>
          <Portfolio/>
          <Contacts/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
