import React from 'react'

import PropTypes from 'prop-types'

import './profile-navbar.css'

const ProfileNavbar = (props) => {
  return (
    <div className={`profile-navbar-container ${props.rootClassName} `}>
      <header
        data-thq="thq-navbar"
        className="profile-navbar-navbar-interactive"
      >
        <img
          alt={props.imageAlt3}
          src={props.imageSrc3}
          loading="lazy"
          className="profile-navbar-image"
        />
        <div data-thq="thq-mobile-menu" className="profile-navbar-mobile-menu">
          <div className="profile-navbar-nav">
            <div className="profile-navbar-top">
              <img
                alt={props.logoAlt}
                src={props.logoSrc}
                className="profile-navbar-logo"
              />
              <div
                data-thq="thq-close-menu"
                className="profile-navbar-close-menu"
              >
                <svg viewBox="0 0 1024 1024" className="profile-navbar-icon">
                  <path
                    d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"
                    className=""
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div data-thq="thq-navbar-nav" className="profile-navbar-desktop-menu">
          <div className="profile-navbar-buttons">
            <button className="thq-button-outline">{props.action2}</button>
          </div>
          <div className="profile-navbar-buttons1">
            <button className="thq-button-filled">{props.action1}</button>
          </div>
        </div>
      </header>
      <div
        data-thq="thq-burger-menu"
        className="profile-navbar-burger-menu"
      ></div>
    </div>
  )
}

ProfileNavbar.defaultProps = {
  imageAlt3: 'image',
  imageSrc3: '/gq%20(1)-200h.webp',
  action1: 'Join the Quest',
  imageAlt1: 'image',
  logoAlt: 'GreenQuest logo',
  link4: "FAQ's",
  link3: 'Projects',
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  imageAlt2: 'image',
  link2: 'About',
  imageAlt: 'image',
  link1: 'Home',
  imageSrc1: '5c25fd75-e002-4400-84e3-47e00975bc8d',
  rootClassName: '',
  imageSrc: '9268e12d-5ab8-4f03-8a35-fffe79be2393',
  action2: 'Back To Home',
  link5: 'Links',
  imageSrc2: '5c25fd75-e002-4400-84e3-47e00975bc8d',
}

ProfileNavbar.propTypes = {
  imageAlt3: PropTypes.string,
  imageSrc3: PropTypes.string,
  action1: PropTypes.string,
  imageAlt1: PropTypes.string,
  logoAlt: PropTypes.string,
  link4: PropTypes.string,
  link3: PropTypes.string,
  logoSrc: PropTypes.string,
  imageAlt2: PropTypes.string,
  link2: PropTypes.string,
  imageAlt: PropTypes.string,
  link1: PropTypes.string,
  imageSrc1: PropTypes.string,
  rootClassName: PropTypes.string,
  imageSrc: PropTypes.string,
  action2: PropTypes.string,
  link5: PropTypes.string,
  imageSrc2: PropTypes.string,
}

export default ProfileNavbar
