import React from 'react'

import PropTypes from 'prop-types'

import ProfileTeam9 from './profile-team9'
import './profilecontent.css'

const Profilecontent = (props) => {
  return (
    <div className={`profilecontent-container ${props.rootClassName} `}>
      <ProfileTeam9 className=""></ProfileTeam9>
    </div>
  )
}

Profilecontent.defaultProps = {
  rootClassName: '',
}

Profilecontent.propTypes = {
  rootClassName: PropTypes.string,
}

export default Profilecontent
