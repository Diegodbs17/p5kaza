import React from 'react'
import { NavLink, Outlet, Link } from 'react-router';

function Layout() {
  return (
    <div>
        <header className='header'>
            <div className="container">
                <div className="header-content">
                    <Link to="/"><img src="logo.svg" alt="Logo Kaza" /></Link>
                    <nav>
                        <ul className="nav-link">
                            <li className="nav-item"><NavLink to="/" className='link-item' end>Accueil</NavLink></li>
                            <li className="nav-item"><NavLink to="about" className='link-item' end>A Propos</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
        <main>
            <Outlet />
        </main>
        <footer className='footer'>
            <div className="footer-content">
                <img className='img-footer' src="footerlogo.svg" alt="Logo Kaza" />
                <p className="copyright">© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    </div>
  );
}

export default Layout;