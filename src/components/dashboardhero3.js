import React from 'react'

import PropTypes from 'prop-types'

import './dashboardhero3.css'

const Dashboardhero3 = (props) => {
  return (
    <div className="dashboardhero3-header9">
      <img
        alt={props.image1Alt}
        src={props.image1Src}
        className="thq-img-ratio-16-9"
      />
    </div>
  )
}

Dashboardhero3.defaultProps = {
  image1Alt: 'Hero Image',
  action1: 'Main action',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
  heading1: 'Menanam Harapan, Membesarkan Masa Depan',
  image1Src:
    'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDV8fHRyZWV8ZW58MHx8fHwxNzE0OTc1MTM5fDA&ixlib=rb-4.0.3&w=1500',
  action2: 'Secondary action',
}

Dashboardhero3.propTypes = {
  image1Alt: PropTypes.string,
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
  image1Src: PropTypes.string,
  action2: PropTypes.string,
}

export default Dashboardhero3
