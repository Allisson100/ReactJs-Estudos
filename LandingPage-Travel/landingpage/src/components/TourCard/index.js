import styles from './styles.module.css'

function TourCard ({ tour }) {
    return (
        <div className={styles.tourCard}>
            <img src={tour.imageUrl} alt={tour.place} />
            <div className={styles.tourCardDetails}>
                <div className={styles.placeAndDaysContainer}>
                    <h4 className={styles.placeName}>{tour.place}</h4>
                    <span className={styles.tourDays}>{tour.days}</span>
                </div>
                <span className={styles.tourPrice}>{tour.price}</span>
            </div>
        </div>
    )
}

export default TourCard