import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/pegasus.svg';

import './header.styles.scss';

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
        <div className='option' onClick={() => auth.signOut()}>
          Keluar
        </div>
      ) : (
        <Link className='option' to='/signin'>
          Masuk
        </Link>
      )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);
