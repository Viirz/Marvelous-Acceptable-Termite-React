import React from 'react'

import PropTypes from 'prop-types'

import './home-hero31.css'

const HomeHero31 = (props) => {
  return (
    <div className="home-hero31-header9">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
      <div className="home-hero31-content thq-section-padding">
        <div className="home-hero31-max-width thq-flex-row thq-section-max-width">
          <div className="home-hero31-column">
            <h1 className="thq-heading-1 home-hero31-text">{props.heading1}</h1>
          </div>
          <div className="home-hero31-column1">
            <p className="thq-body-large home-hero31-text1">{props.content1}</p>
            <div className="home-hero31-actions"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeHero31.defaultProps = {
  heading1: 'Menanam Harapan, Membesarkan Masa Depan',
  image1Alt: 'Hero Image',
  image1Src:
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHRyZWV8ZW58MHx8fHwxNzE0OTc1MTM5fDA&ixlib=rb-4.0.3&w=1500',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
}

HomeHero31.propTypes = {
  heading1: PropTypes.string,
  image1Alt: PropTypes.string,
  image1Src: PropTypes.string,
  content1: PropTypes.string,
}

export default HomeHero31
