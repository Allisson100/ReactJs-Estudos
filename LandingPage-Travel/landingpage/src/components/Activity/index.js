import styles from './styles.module.css'
import { activities } from '../../assets/js/mock.js'
import Card from '../Card/index.js';
import TitlesAndText from '../TitlesAndText';

console.log(activities);

function Activity () {
    return (
        <section className={styles.activityContainer}>
            <TitlesAndText 
                title={'Travel by'}
                subtitle={'activity'}
                p={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
            />
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