import React from 'react'

import { Helmet } from 'react-helmet'

import ProfileNavbar from '../components/profile-navbar'
import Profilecontent from '../components/profilecontent'
import './profile.css'

const Profile = (props) => {
  return (
    <div className="profile-container">
      <Helmet>
        <title>Profile - Marvelous Acceptable Termite</title>
        <meta
          property="og:title"
          content="Profile - Marvelous Acceptable Termite"
        />
      </Helmet>
      <ProfileNavbar rootClassName="profile-navbar-root-class-name"></ProfileNavbar>
      <Profilecontent rootClassName="profilecontent-root-class-name"></Profilecontent>
    </div>
  )
}

export default Profile
