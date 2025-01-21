import React from 'react'

function collapse(props) {
  return (
    <>
        <div className='collapse-content'>
            <input type="checkbox" id={props.id} name={props.id} className="collapse-ask" />
            <label htmlFor={props.id} className="collapse-items">{props.title}<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
            {props.children}
        </div>
    </>
  )
}

export default collapse