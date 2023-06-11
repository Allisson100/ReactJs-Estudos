import styles from './styles.module.css'

function TitlesAndText ({ title, subtitle, p }) {
    return (
        <div className={styles.titlesAndTextContainer}>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <p>{p}</p>
        </div>
        
    )
}

export default TitlesAndText