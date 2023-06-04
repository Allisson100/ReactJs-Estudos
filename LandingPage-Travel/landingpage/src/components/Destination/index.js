import styles from './styles.module.css'

function Destination () {
    return (
        <section className={styles.destinationContainer}>
            <h2>Choose your</h2>
            <h3>Destination</h3>
            <div className={styles.imageContainer}>
                <div className={styles.imageOne}>
                    <div className={styles.imageOpacity}>
                        <h4>Malaysia</h4>
                        <span>16 Tours</span>
                    </div>
                </div>
                
                <div className={styles.imageTwo}>
                    <div className={styles.imageOpacity}>
                        <h4>Dubai</h4>
                        <span>16 Tours</span>
                    </div>
                </div>

                <div className={styles.imageThree}>
                    <div className={styles.imageOpacity}>
                        <h4>Greece</h4>
                        <span>16 Tours</span>
                    </div>
                </div>

                <div className={styles.imageFour}>
                    <div className={styles.imageOpacity}>
                        <h4>Singapore</h4>
                        <span>16 Tours</span>
                    </div>
                </div>
            </div>
            <button className={styles.viewMoreButton}>View More</button>
        </section>
       
    )
}

export default Destination