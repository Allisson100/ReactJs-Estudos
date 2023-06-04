import styles from './styles.module.css'
import CalendarIcon from '../../assets/icons/CalendarIcon'
import MapIcon from '../../assets/icons/MapIcon'
import SearchIcon from '../../assets/icons/SearchIcon'

function ExploreAndTravel () {
    return (
        <section className={styles.exploreContainer}>
            <h2>Explorer and Travel</h2>
            <h3>Let's Go Now</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className={styles.informationContainer}>
                <div className={styles.locationAndDateContainer}>
                    <div className={styles.iconMapContainer}>
                        <span><MapIcon/></span>
                        <div>
                            <h4 className={styles.iconContainerH4}>Location</h4>
                            <span className={styles.iconContainerSpan}>Thailand</span>
                        </div>
                    </div>
                    <span className={styles.pipe}></span>
                    <div className={styles.iconCalendarContainer}>
                        <span><CalendarIcon/></span>
                        <div>
                            <h4 className={styles.iconContainerH4}>Date</h4>
                            <span className={styles.iconContainerSpan}>13 May, 2023</span>
                        </div>
                    </div>
                </div>
                <button><SearchIcon/></button>
            </div>
        </section>
    )
}

export default ExploreAndTravel