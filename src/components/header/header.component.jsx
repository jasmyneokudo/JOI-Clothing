import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';

import {auth} from '../../firebase/firebase.utils';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component'
import {selectCartHidden} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selectors';


const Header = ({currentUser, hidden}) => (

    <div className='header'>
        <Link  className='logo-container' to="/">
            <img style={{
                width: 40, height:40
            }} className='logo' src='/images/joi-logo.png'/>
        </Link>
        <div className='options'>

            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/shop'>
                CONTACT
            </Link>
            {
                currentUser ?
                (<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>)
                :
                (<Link className='option' to='/signin'>SIGN IN</Link>)
            }
            <CartIcon/>
        </div>
        {
            hidden ? null :
            <CartDropDown/>
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});



export default connect(mapStateToProps)(Header);