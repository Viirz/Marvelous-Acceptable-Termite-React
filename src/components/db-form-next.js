import React from 'react'

import PropTypes from 'prop-types'

import './db-form-next.css'

const DBFormNext = (props) => {
  return (
    <div className="db-form-next-container">
      <div className="db-form-next-container1">
        <h1>{props.heading5}</h1>
      </div>
      <div className="db-form-next-container2">
        <h5>{props.heading1}</h5>
        <input
          type="text"
          placeholder={props.textinputPlaceholder1}
          className="input"
        />
      </div>
      <div className="db-form-next-container3">
        <h5>{props.heading}</h5>
        <input
          type="text"
          placeholder={props.textinputPlaceholder}
          className="input"
        />
      </div>
      <div className="db-form-next-container4">
        <h5>{props.heading2}</h5>
        <input
          type="text"
          placeholder={props.textinputPlaceholder2}
          className="input"
        />
      </div>
      <div className="db-form-next-container5">
        <h5>{props.heading3}</h5>
        <select size="5">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <div className="db-form-next-container6">
        <h5>{props.heading4}</h5>
        <textarea
          placeholder={props.textareaPlaceholder}
          className="textarea"
        ></textarea>
      </div>
      <div className="db-form-next-container7">
        <button type="button" className="button">
          {props.button}
        </button>
      </div>
      <div className="db-form-next-container8">
        <button type="button" className="button">
          {props.button1}
        </button>
      </div>
    </div>
  )
}

DBFormNext.defaultProps = {
  heading: 'Email',
  heading2: 'Nomor Telepon',
  heading4: 'Pesan',
  button1: 'Previous',
  textinputPlaceholder4: 'placeholder',
  textinputPlaceholder1: 'placeholder',
  textareaPlaceholder: 'placeholder',
  button: 'Submit',
  heading3: 'Metode Pembayaran',
  textinputPlaceholder2: 'placeholder',
  heading5: 'DETAILS',
  rootClassName: '',
  textinputPlaceholder: 'placeholder',
  heading1: 'Name',
}

DBFormNext.propTypes = {
  heading: PropTypes.string,
  heading2: PropTypes.string,
  heading4: PropTypes.string,
  button1: PropTypes.string,
  textinputPlaceholder4: PropTypes.string,
  textinputPlaceholder1: PropTypes.string,
  textareaPlaceholder: PropTypes.string,
  button: PropTypes.string,
  heading3: PropTypes.string,
  textinputPlaceholder2: PropTypes.string,
  heading5: PropTypes.string,
  rootClassName: PropTypes.string,
  textinputPlaceholder: PropTypes.string,
  heading1: PropTypes.string,
}

export default DBFormNext
