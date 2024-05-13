import React from 'react'

import { Helmet } from 'react-helmet'

import HomeNavbar4 from '../components/home-navbar4'
import Dashboardhero3 from '../components/dashboardhero3'
import DBFormFixed from '../components/db-form-fixed'
import './dashboard.css'

const Dashboard = (props) => {
  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard - Marvelous Acceptable Termite</title>
        <meta
          property="og:title"
          content="Dashboard - Marvelous Acceptable Termite"
        />
      </Helmet>
      <div className="dashboard-navbar1">
        <HomeNavbar4></HomeNavbar4>
      </div>
      <div className="dashboard-hero2">
        <Dashboardhero3></Dashboardhero3>
      </div>
      <div className="dashboard-container1">
        <DBFormFixed rootClassName="db-form-fixed-root-class-name"></DBFormFixed>
      </div>
      <div className="dashboard-container2">
        <img
          alt="image"
          src="/peta%20indo%202%20(1)-500h.webp"
          className="dashboard-image"
        />
      </div>
    </div>
  )
}

export default Dashboard
