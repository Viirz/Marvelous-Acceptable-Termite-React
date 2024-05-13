import React from 'react'

import PropTypes from 'prop-types'

import './sign-up1.css'

const SignUp1 = (props) => {
  return (
    <div className="sign-up1-container">
      <div className="sign-up1-max-width thq-section-max-width">
        <div className="sign-up1-form-root thq-section-padding">
          <div className="sign-up1-form">
            <div className="sign-up1-title-root">
              <h2 className="thq-heading-2">{props.heading1}</h2>
            </div>
            <form className="sign-up1-form1">
              <div className="sign-up1-email">
                <label htmlFor="thq-sign-up-1-email" className="thq-body-large">
                  Email
                </label>
                <input
                  type="email"
                  id="thq-sign-up-1-email"
                  required="true"
                  placeholder="Email address"
                  className="sign-up1-textinput thq-input thq-body-large"
                />
              </div>
              <div className="sign-up1-username">
                <label
                  htmlFor="thq-sign-up-1-username"
                  className="thq-body-large"
                >
                  Username
                </label>
                <input
                  type="text"
                  id="thq-sign-up-1-username"
                  required="true"
                  placeholder="Username"
                  className="sign-up1-textinput1 thq-input thq-body-large"
                />
              </div>
              <div className="sign-up1-no-telp">
                <label
                  htmlFor="thq-sign-up-1-password"
                  className="thq-body-large"
                >
                  Nomor Telepon
                </label>
                <input
                  type="password"
                  id="thq-sign-up-1-password"
                  required="true"
                  placeholder="Nomor Telepon"
                  className="sign-up1-textinput2 thq-input thq-body-large"
                />
                <div className="sign-up1-textfield"></div>
              </div>
              <div className="sign-up1-password">
                <label
                  htmlFor="thq-sign-up-1-password"
                  className="thq-body-large"
                >
                  Nomor Telepon
                </label>
                <input
                  type="password"
                  id="thq-sign-up-1-password"
                  required="true"
                  placeholder="Nomor Telepon"
                  className="sign-up1-textinput3 thq-input thq-body-large"
                />
                <div className="sign-up1-textfield1"></div>
              </div>
            </form>
            <div className="sign-up1-terms-agree">
              <p className="thq-body-large">
                <span>
                  By creating an account, you agree to the Terms of use and
                  Privacy Policy.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <button type="submit" className="thq-button-filled sign-up1-button">
              <span className="sign-up1-text08 thq-body-small">
                {props.action1}
              </span>
            </button>
            <div className="sign-up1-have-an-account-login">
              <p className="thq-body-large">Already have an account? Sign in</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

SignUp1.defaultProps = {
  heading1: 'Details',
  action1: 'Sign Up Now',
}

SignUp1.propTypes = {
  heading1: PropTypes.string,
  action1: PropTypes.string,
}

export default SignUp1
