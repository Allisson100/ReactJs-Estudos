import styles from './styles.module.css'

function Card ({ activity }) {
    return (
        <div className={styles.card}>
            <img src={activity.imageUrl} alt={activity.title} />
            <h2 className={styles.cardTitle}>{activity.title}</h2>
            <p>{activity.description}</p>
        </div>
    )
}

export default Card