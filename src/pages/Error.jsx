import React from 'react'
import { Link } from 'react-router';

function Error() {
  return (
    <>
    <section id="error-404">
      <div className="container">
        <div className="error-content">
          <h1 className="error-title">404</h1>
          <h2 className="error-text">Oups! La page que vous demandez n'existe pas.</h2>
          <Link className="error-link-home" to="/">Retourner sur la page d’accueil</Link>
        </div>
      </div>
    </section>
    </>
  )
}

export default Error