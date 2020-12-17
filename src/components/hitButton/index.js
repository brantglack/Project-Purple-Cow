import React from 'react';

export default (props) => {


  return (
    <button className="hitButton" onClick={props.counted}>{props.text}</button>
  )
}