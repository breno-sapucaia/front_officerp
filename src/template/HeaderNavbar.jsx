import React, { Component } from 'react';
import './HeaderNavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faUserCircle, faBell } from '@fortawesome/free-solid-svg-icons'
import Logo from '../assets/logo.png'
class HeaderNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <header className="headerNavbar">
                <nav className="navbar navbar-expand-lg">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src={Logo} className="logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <FontAwesomeIcon icon={faBars}/>
                        </button>
                        <button className="user-button">
                            <FontAwesomeIcon icon={faBell} className="bell"/>
                            <FontAwesomeIcon icon={faUserCircle} className="user-avatar"/>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                                <a className="nav-link" href="#">Features</a>
                                <a className="nav-link" href="#">Pricing</a>
                                <a className="nav-link" href="#" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        );
    }
}

export default HeaderNavbar;