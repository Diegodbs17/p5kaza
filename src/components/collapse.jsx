import React from 'react'

function collapse() {
  return (
    <>
        <div className='collapse-content'>
            <input type="checkbox" id="fiability" name="fiability" className="collapse-ask" />
            <label htmlFor="fiability" className="collapse-items">Fiabilité<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Test</p>
        </div>
        <div className='collapse-content'>
            <input type="checkbox" id="respect" name="respect" className="collapse-ask" />
            <label htmlFor="respect" className="collapse-items">Respect<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Test</p>
        </div>
        <div className='collapse-content'>
            <input type="checkbox" id="service" name="service" className="collapse-ask" />
            <label htmlFor="service" className="collapse-items">Service<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Test</p>
        </div>
        <div className='collapse-content'>
            <input type="checkbox" id="security" name="security" className="collapse-ask" />
            <label htmlFor="security" className="collapse-items">Sécurité<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Test</p>
        </div>
    </>
  )
}

export default collapse