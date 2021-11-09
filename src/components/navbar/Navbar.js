import './Navbar.css'
import {  Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div id="home">
            <div className="container-fluid">
                <nav className="row navbar fixed-top navbar-expand-lg navbar-light">
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navb">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navb">
                        <ul className="navbar-nav mr-auto mr-2">
                            <li className="nav-item mx-md-2">
                                <Link to="/" className="nav-link active">HOME</Link>
                            </li>
                            <div className="dropdown">
                                <li className="nav-item dropdown">
                                    <Link to="/about" className="nav-link  dropdown-toggle" href="/#" data-bs-toggle="dropdown"> ABOUT  </Link>
                                    <ul className="dropdown-menu">
                                        <li><Link to="/about/about-app" className="dropdown-item" href="/#"> About App</Link></li>
                                        <li><Link to="/about/about-author" className="dropdown-item" href="/#"> About Author </Link></li>
                                    </ul>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
