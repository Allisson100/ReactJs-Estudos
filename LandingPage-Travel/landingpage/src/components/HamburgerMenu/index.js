import styles from './styles.module.css'

function HamburgerMenu ({ onClick , buttonState }) {
    return (
        <div className={styles.displayMenu}>
            <div 
                className={styles.menuContainer} 
                onClick={onClick}
                style={{opacity: `${buttonState ? '0' : '1'}`, transition: '2s'}}
            >
                <div className={styles.lineContainer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        
    )
}

export default HamburgerMenu
