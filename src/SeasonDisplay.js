import React from 'react';
import './SeasonDisplay.css'

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

function SeasonDisplay(props) {

const season = getSeason(props.lat, new Date().getMonth());
const text = season === 'winter' ? 'Хооолодно!' : 'Жааарко!';
const iconName = season === 'summer' ? 'sun' : 'snowflake'
const backgroundColor = season === 'summer' ? 'yellow' : 'blue';

  return (
    <div style={{ backgroundColor: backgroundColor, height: '100vh' }}>
      <i className={`${iconName} icon massive`}></i>
      <h1 className='center-text'>{text}</h1>
      <i className={`${iconName} icon massive bottom-icon`}></i>
    </div>
  )
}

export default SeasonDisplay
