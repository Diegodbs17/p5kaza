import React from 'react'

function collapse() {
  return (
    <>
        <div className='collapse-content'>
            <input type="checkbox" id="fiability" name="fiability" class="collapse-ask" />
            <label for="fiability" className="collapse-items">Fiabilité<span className='icon-collapse'><i class="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Test</p>
        </div>
        <div className='collapse-content'>
            <input type="checkbox" id="respect" name="respect" class="collapse-ask" />
            <label for="respect" className="collapse-items">Respect<span className='icon-collapse'><i class="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Test</p>
        </div>
        <div className='collapse-content'>
            <input type="checkbox" id="service" name="service" class="collapse-ask" />
            <label for="service" className="collapse-items">Service<span className='icon-collapse'><i class="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Test</p>
        </div>
        <div className='collapse-content'>
            <input type="checkbox" id="security" name="security" class="collapse-ask" />
            <label for="security" className="collapse-items">Sécurité<span className='icon-collapse'><i class="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Test</p>
        </div>
    </>
  )
}

export default collapse