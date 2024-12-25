import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import OfferIcon from "../assets/svg/localOfferIcon.svg"
import ExploreIcon from "../assets/svg/exploreIcon.svg"
import PersonOutlinIcon from "../assets/svg/personOutlineIcon.svg"

const NavBar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const pathMatchRoute = (route) => route === location.pathname;

    return (
        <footer className="navbar">
            <nav className="navbarNav">
                <ul className="navbarListItems">
                    <li className="navbarListItem" onClick={() => navigate('/')}>
                        <img src={ExploreIcon} alt="Explore" style={{ fill: pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f', width: '36px', height: '36px' }} />
                        <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'NavbarListItemName'}>Explore</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/offers')}>
                        <img src={OfferIcon} alt="Offers" style={{ fill: pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f', width: '36px', height: '36px' }} />
                        <p className={pathMatchRoute('/offers') ? 'navbarListItemNameActive' : 'NavbarListItemName'}>Offers</p>
                    </li>
                    <li className="navbarListItem" onClick={() => navigate('/profile')}>
                        <img src={PersonOutlinIcon} alt="Profile" style={{ fill: pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f', width: '36px', height: '36px' }} />
                        <p className={pathMatchRoute('/profile') ? 'navbarListItemNameActive' : 'NavbarListItemName'}>Profile</p>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default NavBar;
