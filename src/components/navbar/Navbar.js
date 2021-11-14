import './Navbar.css'
import logo from '../../assets/logo-ALTA.png'
import {  Link } from "react-router-dom";

const Navbar = () => {
    console.log("keluar")
    return (
        <div id="home">
            <div className="container-fluid">
                <nav className="row navbar fixed-top navbar-expand-lg navbar-light">
                    <Link to="/" className="navbar-brand ml-4">
                        <img src={logo} height="50px" alt="logo"></img>
                    </Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                        data-target="#navb">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navb">
                        <ul className="navbar-nav ml-auto mr-2">
                            <li className="nav-item mx-md-4">
                                <Link to="/" className="nav-link active">HOME</Link>
                            </li>
                            <li className="nav-item mx-md-4">
                                <a href="/#" className="nav-link">ABOUT</a>
                            </li>
                            <li className="nav-item mx-md-4">
                                <Link to="/#" className="nav-link">EXPERIENCE</Link>
                            </li>
                            <li className="nav-item mx-md-4">
                                <Link to="/news" className="nav-link">NEWS</Link>
                            </li>
                            <li className="nav-item mx-md-4">
                                <Link to="/contact-us" className="nav-link">CONTACT</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar