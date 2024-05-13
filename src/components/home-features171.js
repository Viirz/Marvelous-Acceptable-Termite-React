import React from 'react'

import PropTypes from 'prop-types'

import './home-features171.css'

const HomeFeatures171 = (props) => {
  return (
    <div className="home-features171-layout349 thq-section-padding">
      <div className="home-features171-max-width thq-section-max-width">
        <div className="home-features171-image-container">
          <img
            alt={props.feature1ImageAlt}
            src={props.feature1ImageSrc}
            className="thq-img-ratio-16-9"
          />
        </div>
        <div className="home-features171-content">
          <div className="home-features171-section-title">
            <span className="thq-body-small">{props.feature1Slogan}</span>
            <div className="home-features171-content1">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <p className="thq-body-large">{props.feature1Description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeFeatures171.defaultProps = {
  feature1Slogan: 'Protecting the Environment',
  feature1ImageSrc:
    'https://images.unsplash.com/photo-1495908333425-29a1e0918c5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1ImageAlt: 'Image of sustainable practices',
  feature1Title: 'Sustainable Practices',
  feature1Description:
    'Learn about our sustainable practices that help protect the environment and promote a greener future.',
}

HomeFeatures171.propTypes = {
  feature1Slogan: PropTypes.string,
  feature1ImageSrc: PropTypes.string,
  feature1ImageAlt: PropTypes.string,
  feature1Title: PropTypes.string,
  feature1Description: PropTypes.string,
}

export default HomeFeatures171
