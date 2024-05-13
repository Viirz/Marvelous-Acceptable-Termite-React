import React from 'react'

import PropTypes from 'prop-types'

import './home-gallery1.css'

const HomeGallery1 = (props) => {
  return (
    <div className="home-gallery1-gallery3 thq-section-padding">
      <div className="home-gallery1-max-width thq-section-max-width">
        <div className="home-gallery1-section-title">
          <h2 className="home-gallery1-text thq-heading-2">{props.heading1}</h2>
          <span className="home-gallery1-text1 thq-body-large">
            {props.content1}
          </span>
        </div>
        <div className="home-gallery1-content">
          <div className="home-gallery1-container">
            <img
              alt={props.image1Alt}
              src={props.image1Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="home-gallery1-container1">
            <img
              alt={props.image2Alt}
              src={props.image2Src}
              className="thq-img-ratio-4-3"
            />
          </div>
          <div className="home-gallery1-container2">
            <img
              alt={props.image3Alt}
              src={props.image3Src}
              className="thq-img-ratio-4-3"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

HomeGallery1.defaultProps = {
  image1Src:
    'https://images.unsplash.com/photo-1710597288405-311061f68d61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image1Alt: 'Sunset over the forest',
  image3Alt: 'Lush greenery and waterfalls',
  image2Src:
    'https://images.unsplash.com/photo-1663069406481-d0d863af964d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MXw&ixlib=rb-4.0.3&q=80&w=1080',
  image3Src:
    'https://images.unsplash.com/photo-1624640103930-65ecbeedc7db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNDk3NjY5MHw&ixlib=rb-4.0.3&q=80&w=1080',
  image2Alt: 'Wildlife in their natural habitat',
  content1:
    'Take a visual journey through our gallery showcasing the stunning beauty of nature and our conservation projects.',
  heading1: "Exploring Nature's Beauty",
}

HomeGallery1.propTypes = {
  image1Src: PropTypes.string,
  image1Alt: PropTypes.string,
  image3Alt: PropTypes.string,
  image2Src: PropTypes.string,
  image3Src: PropTypes.string,
  image2Alt: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default HomeGallery1
