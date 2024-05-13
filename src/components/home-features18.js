import React from 'react'

import PropTypes from 'prop-types'

import './home-features18.css'

const HomeFeatures18 = (props) => {
  return (
    <div className="home-features18-layout349 thq-section-padding">
      <div className="home-features18-max-width thq-section-max-width">
        <div className="home-features18-content">
          <div className="home-features18-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="home-features18-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
        <div className="home-features18-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
      </div>
    </div>
  )
}

HomeFeatures18.defaultProps = {
  feature1Slogan: 'Growing Together for a Greener Future',
  feature1ImageAlt: 'Image of Tree Planting',
  feature1Description:
    'Join us in our tree planting projects to help restore the environment and create a sustainable future for generations to come.',
  feature1Title: 'Tree Planting Initiatives',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MXw&ixlib=rb-4.0.3&q=80&w=1080',
}

HomeFeatures18.propTypes = {
  feature1Slogan: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
}

export default HomeFeatures18
