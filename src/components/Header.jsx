import React from 'react'

function header() {
  return (
    <header className='header'>
        <div className="container">
            <div className="header-content">
                <img src="./public/logo.svg" alt="Logo Kaza" />
                <nav>
                    <ul className="nav-link">
                        <li className="nav-item"><a className='link-item' href="">Accueil</a></li>
                        <li className="nav-item"><a className='link-item' href="">A Propos</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
  )
}

export default header