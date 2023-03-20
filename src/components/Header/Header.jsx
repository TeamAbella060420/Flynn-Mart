import { useEffect, useRef } from "react"; // import hooks from React library
import './header.css' // import styles
import { Container, Row } from "reactstrap"; // import components from Reactstrap library

import logo from '../../assets/images/eco-logo.png' // import image assets
import userIcon from '../../assets/images/user-icon.png'

import { NavLink, useNavigate, Link } from "react-router-dom"; // import routing hooks
import { motion } from 'framer-motion'; // import animation effects from Framer Motion library
import { useSelector } from "react-redux"; // import state management tool (used in Redux)
import useAuth from '../../custom-hooks/useAuth' // import custom auth hook
import { signOut } from "firebase/auth"; // import authentication tool (used in Firebase)
import { auth } from "../../firebase.config";
import { toast } from "react-toastify"; // import notification tool from react-toastify

// configuration for navigation links
const nav__links = [
    {
        path: 'home',
        display: 'Home'
    },
    {
        path: 'shop',
        display: 'Shop'
    },
    {
        path: 'cart',
        display: 'Cart'
    },
]

const Header = () => { // create Header component function

    const headerRef = useRef(null); // create reference object for sticky navbar feature
    const totalQuantity = useSelector(state => state.cart.totalQuantity) // retrieve state data using Redux selector
    const profileActionRef = useRef(null); // create reference object for hamburger menu of user actions

    const menuRef = useRef(null); // create reference object for mobile navigation menu
    const navigate = useNavigate(); // create navigation function using a hook
    const { currentUser } = useAuth(); // retrieve current user object from Firebase authentication

    const stickyHeaderFunc = () => { // create function that adds and removes a class to toggle sticky navbar feature
        window.addEventListener('scroll', () => { // add an event listener to the window scroll
            if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){ // checks whether window is scrolled over 80 pixels from the top
                headerRef.current.classList.add('sticky__header') // adds a class to header element to make it sticky
            } else {
                headerRef.current.classList.remove('sticky__header') // removes class to make header element no longer sticky
            }
        })
    }

    const logout = () => { // create function to log out current user using Firebase auth
        signOut(auth).then(() => { // call Firebase signOut function with then() method for success case
            toast.success('Logged out') // use toast notification to show successful logout message
            navigate('/home') // navigate user to home page after logging out
        }).catch(err => {
            toast.error('Logged out fail') // use toast notification to show failed logout message
        })
    }

    useEffect(() => { // useEffect hook that calls stickyHeaderFunc to update sticky navbar
        stickyHeaderFunc()
        return () => window.removeEventListener('scroll', stickyHeaderFunc) // this cleanup function is to remove the event listener to prevent memory leak
    })

    const menuToggle = () => { // creates function to handle toggling the active menu for hamburger menu
        console.log(menuRef, 'menuRef'); // logs for debugging purposes
        menuRef.current.classList.toggle('active__menu') // toggles class to active or inactive based on whether the class already exists
    }

    const navigateToCart = () => { // create function that uses navigate() to send user to the cart page
        navigate('/cart')
    };

    const toggleProfileActions = () => { // creates function to handle toggling the visible mobile user actions menu when hamburger icon is clicked
        console.log(profileActionRef, 'profileActionRef'); // logs for debugging purposes
        profileActionRef.current.classList.toggle('show__profileActions'); // toggles class to active or inactive based on whether the class already exists
      }
    return (
// This is a top-level header component and sets a reference to 'headerRef'
<header className="header" ref={headerRef}>

{/* Container provides a fixed width in which contents are confined. */}
<Container>

    {/* // Row is used as a growable container for columns. */}
    <Row>
        {/* // This contains all navigation options */}
        <div className="nav__wrapper">
            {/* // The logo component */}
            <div className="logo">
                <img src={logo} alt="logo" />
                <div>
                    <h1>FlyNNMart</h1>
                </div>
            </div>
            {/* // Navigation options for desktop view, a responsive hamburger icon appears on small screens */}
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
                <ul className="menu">
                    {
                        // Map through nav__links array using its elements and index and returning an output JSX.
                        // Adding keys for uniqueness.
                        nav__links.map((item, index) => {
                            return (
                            <li className="nav__item" key={index}>
                            <NavLink to={item.path} className={(navClass) =>
                                navClass.isActive ? 'nav__active': ''
                            }>
                                {item.display}
                            </NavLink>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
            {/* // Navigation icons includes favourites, cart, and user icon */}
            <div className="nav__icons">
                <span className="fav__icon">
                    <i class="ri-heart-line"></i>
                    <span className="badge">1</span>
                </span>
                <span className="cart__icon"><i
                    class="ri-shopping-bag-line" onClick={navigateToCart}></i>
                    <span className="badge">{totalQuantity}</span>
                </span>

                {/* // User profile actions includes profile picture and dropdown for account actions */}
                <div className="profile">
                    <motion.img
                        whileTap={{ scale: 1.2}}
                        src={ currentUser ? currentUser.photoURL: userIcon }
                        alt=""
                        onClick={toggleProfileActions}
                        />
                    <div
                          className='profile__actions'
                          onClick={toggleProfileActions}
                          ref={profileActionRef}
                    >
                        {
                            // Ternary operation to determine if user is logged in or not, and display respective JSX.
                            currentUser ?
                            <span onClick={logout}>Logout</span> :
                            <div className="d-flex align-items-center justify-content-center flex-column">
                                <Link to='/signup'>Signup</Link>
                                <Link to='/login'>Login</Link>
                            </div>
                        }
                    </div>
                </div>
                <div className="mobile__menu">
                    <span onClick={menuToggle}>
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </div>
    </Row>
</Container>
</header>
    )
};

export default Header; // Exporting Header component.

