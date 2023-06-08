import styles from './styles.module.css'
import ArrowIcon from '../../assets/icons/ArrowIcon.js'

function Newsletter () {
    return (
        <section className={styles.newsletterContainer}>
            <div className={styles.newsletterContent}>
                <h2>Get Our Monthly Newsletter</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <div className={styles.newsletterInputAndIcon}>
                    <input type="text" className={styles.newsletterInput} placeholder='Input your emaill address in here'/>
                    <button className={styles.newsletterButton}>
                        <ArrowIcon className={styles.arrowIcon}/>
                    </button>
                </div>
            </div>
            <img src={require('../../assets/img/building.png')} alt="building" className={styles.newsletterBuilding}/>

        </section>
    )
}

export default Newsletter