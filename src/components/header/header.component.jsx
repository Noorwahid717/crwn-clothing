import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo  } from '../../assets/pegasus.svg';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Belanja
            </Link>
        </div>
        <div className='options'>
            <Link className='option' to='/shop'>
                Hubungi
            </Link>
        </div>
    </div>
)

export default Header;