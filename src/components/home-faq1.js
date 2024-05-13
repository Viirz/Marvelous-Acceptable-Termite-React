import React from 'react'

import PropTypes from 'prop-types'

import './home-faq1.css'

const HomeFAQ1 = (props) => {
  return (
    <div className="home-faq1-faq7 thq-section-padding">
      <div className="home-faq1-max-width thq-section-max-width">
        <div className="thq-flex-column">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <p className="home-faq1-text1 thq-body-large">{props.content1}</p>
        </div>
        <div className="thq-flex-column home-faq1-list">
          <div className="home-faq1-list-item1">
            <p className="home-faq1-faq1-question thq-body-large">
              {props.faq1Question}
            </p>
            <span className="thq-body-small">{props.faq1Answer}</span>
          </div>
          <div className="home-faq1-list-item2">
            <p className="home-faq1-faq2-question thq-body-large">
              {props.faq2Question}
            </p>
            <span className="thq-body-small">{props.faq2Answer}</span>
          </div>
          <div className="home-faq1-list-item3">
            <p className="home-faq1-faq3-question thq-body-large">
              {props.faq3Question}
            </p>
            <span className="thq-body-small">{props.faq3Answer}</span>
          </div>
          <div className="home-faq1-list-item4">
            <p className="home-faq1-faq4-question thq-body-large">
              {props.faq4Question}
            </p>
            <span className="thq-body-small">{props.faq4Answer}</span>
          </div>
          <div className="home-faq1-list-item5">
            <p className="home-faq1-faq5-question thq-body-large">
              {props.faq5Question}
            </p>
            <span className="thq-body-small">{props.faq5Answer}</span>
          </div>
        </div>
        <div className="thq-flex-column">
          <div className="home-faq1-content1">
            <h2 className="thq-heading-2">{props.heading2}</h2>
            <p className="home-faq1-text3 thq-body-large">{props.content2}</p>
          </div>
          <div className="home-faq1-container">
            <button className="thq-button-outline home-faq1-button">
              <span className="thq-body-small">{props.action1}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

HomeFAQ1.defaultProps = {
  faq1Answer:
    "GreenQuest's mission is to promote environmental sustainability through tree planting and conservation efforts.",
  faq2Answer:
    'You can get involved with GreenQuest by volunteering for tree planting events, donating to support our projects, or spreading awareness about our mission.',
  faq4Question:
    'How does GreenQuest ensure the sustainability of its projects?',
  faq5Question: 'Is my donation tax-deductible?',
  heading1: 'FAQs',
  faq3Question: 'Where does GreenQuest plant trees?',
  action1: 'Contact',
  heading2: 'Still have a question?',
  faq2Question: 'How can I get involved with GreenQuest?',
  faq1Question: "What is GreenQuest's mission?",
  faq5Answer:
    'Yes, donations made to GreenQuest are tax-deductible to the extent allowed by law. Please consult with your tax advisor for more information.',
  faq4Answer:
    'GreenQuest works closely with local communities and environmental experts to ensure that tree planting projects are sustainable and have a positive long-term impact.',
  content1:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.',
  content2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
  faq3Answer:
    'GreenQuest plants trees in various locations around the world, focusing on areas that are in need of reforestation and conservation.',
}

HomeFAQ1.propTypes = {
  faq1Answer: PropTypes.string,
  faq2Answer: PropTypes.string,
  faq4Question: PropTypes.string,
  faq5Question: PropTypes.string,
  heading1: PropTypes.string,
  faq3Question: PropTypes.string,
  action1: PropTypes.string,
  heading2: PropTypes.string,
  faq2Question: PropTypes.string,
  faq1Question: PropTypes.string,
  faq5Answer: PropTypes.string,
  faq4Answer: PropTypes.string,
  content1: PropTypes.string,
  content2: PropTypes.string,
  faq3Answer: PropTypes.string,
}

export default HomeFAQ1
