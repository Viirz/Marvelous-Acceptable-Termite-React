import React from 'react'

import PropTypes from 'prop-types'

import './db-hero.css'

const DBHero = (props) => {
  return (
    <div className={`db-hero-header9 ${props.rootClassName} `}>
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
      <div className="db-hero-content thq-section-padding">
        <div className="db-hero-max-width thq-flex-row thq-section-max-width">
          <div className="db-hero-column"></div>
          <div className="db-hero-column1">
            <div className="db-hero-actions"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

DBHero.defaultProps = {
  heading1: 'COUNTER',
  heading: 'Heading',
  rootClassName: '',
  image1Alt: 'Hero Image',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  image1Src:
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHRyZWV8ZW58MHx8fHwxNzE0OTc1MTM5fDA&ixlib=rb-4.0.3&w=1500',
}

DBHero.propTypes = {
  heading1: PropTypes.string,
  heading: PropTypes.string,
  rootClassName: PropTypes.string,
  image1Alt: PropTypes.string,
  content1: PropTypes.string,
  image1Src: PropTypes.string,
}

export default DBHero
