import HamburgerMenu from '../HamburgerMenu'
import Navbar from '../Navbar'
import styles from './styles.module.css'

import { useState } from 'react'

function Header () {

    const [buttonMode , setButtonMode] = useState(false)

    const menuHambugerMode = () => {
        setButtonMode(!buttonMode)
    }

    return (
        <header>
            <nav className={styles.navContainer}>
                <h1 className={styles.logo}>Listee Travel</h1>
                <ul className={styles.ulHeader}>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Destinations</li>
                    <li>Tours</li>
                    <li>Shop</li>
                    <li>Blogs</li>
                </ul>
                <div className={styles.signContainer}>
                    <span>Sign In</span>
                    <button>SignUp</button>
                </div>

                <HamburgerMenu 
                    onClick={menuHambugerMode}
                    buttonState={buttonMode}
                />                
            </nav>
            <Navbar 
                buttonState={buttonMode}
                onClick={menuHambugerMode}
            />
            
        </header>
    )
}

export default Header