import './App.css'
import Navbar from './Navbar'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Slide from './Slide'
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Deneme from './Deneme';
import Services from './Services';
import Contact from './Contact';
import Footer from './footer';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Whatsapp from './Whatsapp';
import { Helmet } from 'react-helmet';

function App() {

  return (
    <>
      <Helmet>
        <title>Yetkili Elektrik</title>
        <meta name="description" content="Yetkili Elektrik" />
        <meta name="keywords" content="Yetkili Elektrik" />
        <meta property="og:title" content="Yetkili Elektrik" />
        <meta property="og:description" content="yetkili elektrik" />
      </Helmet>
      <Whatsapp />
      <Navbar />
      <Slide />
      <Deneme />
      <Services />
      <Contact />
      <Footer />
    </>

  )
}

export default App
