import React from 'react'

import { Helmet } from 'react-helmet'

import HomeNavbar4 from '../components/home-navbar4'
import Dashboardhero3 from '../components/dashboardhero3'
import HomeLogos1 from '../components/home-logos1'
import HomeGallery1 from '../components/home-gallery1'
import HomeFeatures17 from '../components/home-features17'
import HomeFeatures18 from '../components/home-features18'
import HomeFeatures171 from '../components/home-features171'
import HomeFAQ1 from '../components/home-faq1'
import HomeContact4 from '../components/home-contact4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Marvelous Acceptable Termite</title>
        <meta property="og:title" content="Marvelous Acceptable Termite" />
      </Helmet>
      <div className="home-navbar1">
        <HomeNavbar4></HomeNavbar4>
      </div>
      <div className="home-hero2">
        <Dashboardhero3></Dashboardhero3>
      </div>
      <div className="home-logos3">
        <HomeLogos1></HomeLogos1>
      </div>
      <div className="home-gallery4">
        <HomeGallery1></HomeGallery1>
      </div>
      <div className="home-features5">
        <HomeFeatures17></HomeFeatures17>
      </div>
      <div className="home-features6">
        <HomeFeatures18></HomeFeatures18>
      </div>
      <div className="home-features7">
        <HomeFeatures171></HomeFeatures171>
      </div>
      <div className="home-cta8"></div>
      <div className="home-faq9">
        <HomeFAQ1></HomeFAQ1>
      </div>
      <div className="home-contact10">
        <HomeContact4></HomeContact4>
      </div>
      <div className="home-footer11"></div>
    </div>
  )
}

export default Home
