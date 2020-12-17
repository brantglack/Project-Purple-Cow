import React from 'react';

export default (props) => {
  return (
    <>
      <div class="columns">
        <div>
          <img alt={props.alt} src={props.img}/>
        </div>
        <div>
          <p>{props.body}</p>
        </div>
      </div>
    </>
  )
}