import './components/Header.css';
import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';


export default function header() {
    return (
        <header>
            <image>add image </image>
            <div className='txt-200-regular '>LOGO</div>
            <Navbar className='flex--container'>
                <NavItem>
                    <Link className='nav-link' to='/'>Home</Link>
                </NavItem>
                <NavItem>
                    <Link className='nav-link' to='/'>About</Link>
                </NavItem>
                <NavItem>
                        <Link className='nav-link' to='/profile'>Profile</Link>
                </NavItem>
            </Navbar>
        </header>
        )
}
