import React from 'react'

import PropTypes from 'prop-types'

import './home-features17.css'

const HomeFeatures17 = (props) => {
  return (
    <div className="home-features17-layout349 thq-section-padding">
      <div className="home-features17-max-width thq-section-max-width">
        <div className="home-features17-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="home-features17-content">
          <div className="home-features17-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="home-features17-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeFeatures17.defaultProps = {
  feature1Description:
    'Learn about our eco-friendly initiatives and how we are committed to preserving the environment for future generations.',
  feature1Title: 'Sustainable Practices',
  feature1ImageAlt: 'Image of sustainable practices',
  feature1Slogan: 'Protecting the Environment',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1590541576391-dfc42314a7ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MHw&ixlib=rb-4.0.3&q=80&w=1080',
}

HomeFeatures17.propTypes = {
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Slogan: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default HomeFeatures17
