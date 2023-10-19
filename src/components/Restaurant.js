import React from 'react';
import About from './About/About';
import Gallery from './Gallery/Gallery';
import logo from '../assets/logo.jpeg';
import Contact from './Contact/Contact';
import './Restaurant.scss';
import Navbar from './Navbar/Navbar';

const Restaurant = () => {
    return (
        <div>
            <Navbar />
            <div className='logo-bg'>
                <img src={logo} />
            </div>
            <About />
            <Gallery />
            <Contact />
        </div>
    )
}

export default Restaurant;