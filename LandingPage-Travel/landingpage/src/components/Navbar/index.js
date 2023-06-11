import CloseIcon from '../CloseIcon'
import styles from './styles.module.css'

function Navbar ({ buttonState , onClick }) {
    return (
        <nav 
            className={styles.nav}
            style={{right: `${buttonState ? '-45vw' : '0'}`}}
        >
            <ul className={styles.menuContainerUl}>
                <li>Home</li>
                <li>About Us</li>
                <li>Destinations</li>
                <li>Tours</li>
                <li>Shop</li>
                <li>Blogs</li>
                <CloseIcon 
                    onClick={onClick}
                />
            </ul>
            
        </nav>
            
    )
}

export default Navbar