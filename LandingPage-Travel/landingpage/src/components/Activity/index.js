import styles from './styles.module.css'
import { activities } from '../../assets/js/mock.js'
import Card from '../Card/index.js';

console.log(activities);

function Activity () {
    return (
        <section className={styles.activityContainer}>
            <h2 className={styles.activityTitle}>Travel by</h2>
            <h3 className={styles.activitySubtitle}>activity</h3>
            <p className={styles.activityP}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className={styles.cardContainer}>
                {activities.map((activity) => {
                    return (
                        <Card 
                            activity={activity}
                            key={activity.id}
                        />)}
                    )
                }
            </div>
        </section>
    )
}

export default Activity