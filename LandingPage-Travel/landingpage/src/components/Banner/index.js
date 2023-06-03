import Header from '../Header'
import styles from './styles.module.css'

function Banner () {
    return (
        <div className={styles.bannerContainer}>
            <div className={styles.shadowImage}>
                <Header/>
            </div>
        </div>
    )
}

export default Banner