import React from 'react'

function heroabout(props) {
  return (
    <>
      <div className="container">
        <div className={props.class}>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default heroabout