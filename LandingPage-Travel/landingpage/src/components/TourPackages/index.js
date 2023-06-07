import styles from './styles.module.css'

import TourCard from "../TourCard"

function TourPackages ({ tours }) {

    return (
        <section className={styles.tourPackages}>
            <h2>Popular</h2>
            <h3>tour packages</h3>

            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>

            <div className={styles.tourCardContainer}>
                {tours.map((tour => {
                    return (
                        <TourCard 
                            tour={tour}
                            key={tour.id}
                        />
                    )
                }))}
            </div>

            
        </section>
    )
}

export default TourPackages