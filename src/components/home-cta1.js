import React from 'react'

import PropTypes from 'prop-types'

import './home-cta1.css'

const HomeCTA1 = (props) => {
  return (
    <div className="home-cta1-container thq-section-padding">
      <div className="home-cta1-max-width thq-section-max-width">
        <div className="home-cta1-content">
          <h2 className="home-cta1-heading1 thq-heading-2">{props.heading1}</h2>
          <p className="home-cta1-content1 thq-body-large">{props.content1}</p>
          <div className="home-cta1-actions">
            <button className="thq-button-filled home-cta1-button">
              <span className="home-cta1-action1 thq-body-small">
                {props.action1}
              </span>
            </button>
            <button className="thq-button-outline home-cta1-button1">
              <span className="home-cta1-action2 thq-body-small">
                {props.action2}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeCTA1.defaultProps = {
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  action1: 'Main action',
  action2: 'Secondary action',
  heading1: 'Call to action that excites the visitor to try your product',
}

HomeCTA1.propTypes = {
  content1: PropTypes.string,
  action1: PropTypes.string,
  action2: PropTypes.string,
  heading1: PropTypes.string,
}

export default HomeCTA1
