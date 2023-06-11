import styles from './styles.module.css'

function CloseIcon ({ onClick }) {
    return (
        <div 
            className={styles.closeIconContainer}
            onClick={onClick}
        >
            <span className={styles.closeIconSpan}></span>
            <span className={styles.closeIconSpan}></span>
        </div>
    )
}

export default CloseIcon