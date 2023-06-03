import styles from './styles.module.css'

function Header () {
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
            </nav>
        </header>
    )
}

export default Header