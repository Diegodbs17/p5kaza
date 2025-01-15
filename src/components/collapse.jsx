import React from 'react'

function collapse() {
  return (
    <>
        <div className='collapse-content'>
            <input type="checkbox" id="fiability" name="fiability" className="collapse-ask" />
            <label htmlFor="fiability" className="collapse-items">Fiabilité<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
        </div>
        <div className='collapse-content'>
            <input type="checkbox" id="respect" name="respect" className="collapse-ask" />
            <label htmlFor="respect" className="collapse-items">Respect<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
        </div>
        <div className='collapse-content'>
            <input type="checkbox" id="service" name="service" className="collapse-ask" />
            <label htmlFor="service" className="collapse-items">Service<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
        </div>
        <div className='collapse-content'>
            <input type="checkbox" id="security" name="security" className="collapse-ask" />
            <label htmlFor="security" className="collapse-items">Sécurité<span className='icon-collapse'><i className="fa-solid fa-chevron-up"></i></span></label>
            <p className="answer-collapse">La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
        </div>
    </>
  )
}

export default collapse