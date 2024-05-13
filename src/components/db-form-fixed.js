import React from 'react'

import PropTypes from 'prop-types'

import './db-form-fixed.css'

const DBFormFixed = (props) => {
  return (
    <div className={`db-form-fixed-container ${props.rootClassName} `}>
      <div className="db-form-fixed-container1">
        <h1 className="">{props.heading}</h1>
        <h2 className="">{props.text}</h2>
      </div>
      <div className="db-form-fixed-container2">
        <button type="button" className="button">
          {props.button14}
        </button>
        <button type="button" className="button">
          {props.button13}
        </button>
      </div>
      <div className="db-form-fixed-container3">
        <button type="button" className="button">
          {props.button15}
        </button>
        <button type="button" className="button">
          {props.button16}
        </button>
      </div>
      <div className="db-form-fixed-container4">
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className="input"
        />
      </div>
      <div className="db-form-fixed-container5">
        <button type="button" className="button">
          {props.button}
        </button>
      </div>
    </div>
  )
}

DBFormFixed.defaultProps = {
  button15: '50 pohon',
  heading: 'JOIN',
  button: 'Next',
  textinputPlaceholder: 'placeholder',
  button13: '20 pohon',
  text: 'Rp 16.000 untuk tanam pohon',
  rootClassName: '',
  button16: '30 pohon',
  button14: '5 pohon',
}

DBFormFixed.propTypes = {
  button15: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  button13: PropTypes.string,
  text: PropTypes.string,
  rootClassName: PropTypes.string,
  button16: PropTypes.string,
  button14: PropTypes.string,
}

export default DBFormFixed
