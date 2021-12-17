import './Navbar.css'
import { Link } from 'react-router-dom'

// images
import sjccLogo from '../../img/logo.png'

function Navbar() {
    return (
        <div className="container">
            <nav id="nav" className="navbar navbar-expand-md bg-color-1 navbar-light">
                <div className="container">
                    <div class="d-flex align-items-center justify-content-between w-100">
                        {/* <div className="d-none d-md-block"> */}
                            <ul class="nav justify-content-center mb-0">
                                <li><a href="#" className="text-color-2 link-hover-1 nav-link">UPDATES</a></li>
                                <li><a href="#" className="text-color-2 link-hover-1 nav-link">ALUMNI</a></li>
                                <li><a href="#" className="text-color-2 link-hover-1 nav-link">GALLERY</a></li>
                                <li><a href="#" className="text-color-2 link-hover-1 nav-link">CAREER</a></li>
                            </ul>
                        {/* </div> */}
                        <div class="d-flex align-items-center">
                            <Link exact="true" to="/" className="navbar-brand">
                                <img src={sjccLogo} className="d-inline-block align-top" alt="SJCC Logo" height="65px" width="auto" /> 
                            </Link>
                            <p className="mb-0">San Jose Community College</p>
                        </div>
                        <div className="d-none d-md-block">
                            <ul class="nav justify-content-center mb-0">
                                <li><a href="#" className="text-color-2 link-hover-1 nav-link">ABOUT SJCC</a></li>
                                <li><a href="#" className="text-color-2 link-hover-1 nav-link">ADMISSION</a></li>
                                <li><a href="#" className="text-color-2 link-hover-1 nav-link">RESOURCES</a></li>
                                <li><a href="#" className="text-color-2 link-hover-1 nav-link">CONTACT US</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar