import Button from '../Button'
import TitlesAndText from '../TitlesAndText'
import styles from './styles.module.css'

function Destination () {
    return (
        <section className={styles.destinationContainer}>
            <TitlesAndText 
                title={'Choose your'}
                subtitle={'Destination'}
                p={''}
            />
            <div className={styles.imageContainer}>
                <div className={styles.imageOne}>
                    <div className={styles.imageOpacity}>
                        <h4>Malaysia</h4>
                        <Button>16 Tours</Button>
                    </div>
                </div>
                
                <div className={styles.imageTwo}>
                    <div className={styles.imageOpacity}>
                        <h4>Dubai</h4>
                        <Button>16 Tours</Button>
                    </div>
                </div>

                <div className={styles.imageThree}>
                    <div className={styles.imageOpacity}>
                        <h4>Greece</h4>
                        <Button>16 Tours</Button>
                    </div>
                </div>

                <div className={styles.imageFour}>
                    <div className={styles.imageOpacity}>
                        <h4>Singapore</h4>
                        <Button>16 Tours</Button>
                    </div>
                </div>
            </div>
            
            <div className={styles.buttonConatainner}>
                <Button>View More</Button>
            </div>
            
        </section>
       
    )
}

export default Destination