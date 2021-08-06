import React from 'react';
import { Link } from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo  } from '../../assets/pegasus.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link className='logo-container' to='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>
                Belanja
            </Link>
        
            <Link className='option' to='/shop'>
                Hubungi
            </Link>

        {currentUser ? (
                <div className='option' onClick={() => auth.signOut()}> Keluar </div>
            ) : (
                <Link className='option' to='signin'> Masuk </Link>
            )
        }
        </div>
    </div>
)

export default Header;