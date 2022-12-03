import './App.sass';
import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import Header from '../components/header/header';
import Main from '../components/main/main';
import About from '../components/about/about';
import Portfolio from '../components/portfolio/portfolio';
import Contacts from '../components/contacts/contacts';
import Footer from '../components/footer/footer';
import Frontend from '../components/about/modals/frontend-modal/frontend-modal';
import UIModal from '../components/about/modals/ui-modal/ui-modal';
import PortModal from '../components/portfolio/portfolio-modal/portfolio-modal';


function App() {

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [isAboutOpen, setAboutOpen] = useState(false);
  const [isPortOpen, setPortOpen] = useState(false);
  const [className, setClass] = useState("");

  const [data, setData] = useState([]);

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

  const openModal = () => {
    setAboutOpen(true);
  }

  const closeModal = () => {
    setAboutOpen(false);
    setPortOpen(false);
    document.body.style.overflow = "auto";
  }

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  const onModalIsOpen = (clsname) => {

    if (clsname === "block-front") {
      return <Frontend closeModal={closeModal}/>
    } else if (clsname === "block-ui") {
      return <UIModal closeModal={closeModal}/>
    }

  }

  const getData = (data, id) => {

    const index = data.findIndex(item => item.id === id);
    setData(data[index]);
    setPortOpen(true);
  }


  const goToTopBtn = scrolling ? <button onClick={goToTop} id="fixedbtn"><img src={process.env.PUBLIC_URL + "images/arrow.svg"} alt="arrow"/></button> : null
  const frontModal = isAboutOpen ? onModalIsOpen(className) : null;
  const portModal = isPortOpen ? <PortModal closeModal={closeModal} data={data}/> : null;
  
  return (
    <div className="App">
      {goToTopBtn}
      {frontModal}
      {portModal}
      <Header/>
        <Main/>
        <div className='container'>
          <About setClass={setClass} openModal={openModal}/>
          <Portfolio getData={getData}/>
          <Contacts/>
        </div>
      <Footer/>
    </div>
  );
}

export default App;
