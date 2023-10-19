import React from 'react';
import './Navbar.scss';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Swamy's Kitchen</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/#about_us">About me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/#gallery">Gallery</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/#location">Location</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white" aria-current="page" href="/#contact">Contact me</a>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}

export default Navbar;