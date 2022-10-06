import React from 'react';

function Loader(props) {

  Loader.defaultProps = {text: "Loading..."};

  return (
    <div className='ui active dimmer'>
      <div className='ui text loader'>
        {props.text}
      </div>
    </div>
  )
}

export default Loader
