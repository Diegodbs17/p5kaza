import React from 'react'

function accomodationDescription() {
  return (
    <>
    <div className="container">
        <div className="accomodation-top-content">
            <div className="accomodation-description-content-left">
                <h1 className="accomodation-title">Cozy loft on the Canal Saint-Martin</h1>
                <h2 className="accomodation-geographie">Paris, Île-de-France</h2>
                <div className="accomodation-tags">
                    <ul className="accomodation-tags-list">
                        <li className="accomodation-tags-item">Cozy</li>
                        <li className="accomodation-tags-item">Canal</li>
                        <li className="accomodation-tags-item">Paris 10</li>
                    </ul>
                </div>
            </div>
            <div className="accomodation-description-content-right">
                <div className="accomodation-host">
                    <h2 className="accomodation-host-name">Alexandre Dumas</h2>
                    <img className="accomodation-host-img" src="https://picsum.photos/75/75" alt="" />
                </div>
                <div className="accomodation-reviews-content">
                    <ul className="accomodation-reviews-content">
                        <li className="accomodation-reviews-stars full-stars"><i class="fa-solid fa-star"></i></li>
                        <li className="accomodation-reviews-stars full-stars"><i class="fa-solid fa-star"></i></li>
                        <li className="accomodation-reviews-stars full-stars"><i class="fa-solid fa-star"></i></li>
                        <li className="accomodation-reviews-stars"><i class="fa-solid fa-star"></i></li>
                        <li className="accomodation-reviews-stars"><i class="fa-solid fa-star"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="accomodation-description-content-tabs">
            <div className='collapse-content'>
                <input type="checkbox" id="description" name="description" className="collapse-ask" />
                <label htmlFor="description" className="collapse-items">Description<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
                <p className="answer-collapse">Test</p>
            </div>
            <div className='collapse-content'>
                <input type="checkbox" id="items" name="items" className="collapse-ask" />
                <label htmlFor="items" className="collapse-items">Équipements<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
                <p className="answer-collapse">Test</p>
            </div>
        </div>
    </div>
    </>
  )
}

export default accomodationDescription