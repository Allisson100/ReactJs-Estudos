import styles from './styles.module.css'

import TourCard from "../TourCard"
import TitlesAndText from '../TitlesAndText'

function TourPackages ({ tours }) {

    return (
        <section className={styles.tourPackages}>
            <TitlesAndText 
                title={'Popular'}
                subtitle={'tour packages'}
                p={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
            />

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