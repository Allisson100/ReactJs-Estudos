import TitlesAndText from '../TitlesAndText'
import styles from './styles.module.css'

function ReviewEtour () {
    return (
        <section className={styles.reviewContainer}>
            <TitlesAndText 
                title={"Review & Testimonials"}
                subtitle={'top reviews for etour'}
                p={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
            /> 
            
            <div className={styles.commentContainer}>
                <p className={styles.commentContainerP}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.....
                </p>
            </div>
            <div className={styles.picturesContainer}>
                <img src={require('../../assets/img/pic1.png')} alt="pic1" />
                <img src={require('../../assets/img/pic2.png')} alt="pic2" />
                <img src={require('../../assets/img/pic3.png')} alt="pic3" />
                <div className={styles.pictureFourContainer}>
                    <img src={require('../../assets/img/pic4.png')} alt="pic4" />
                    <div className={styles.picFourDetails}>
                        <span className={styles.picFourDetailsName}>Scarlett Thomas</span>
                        <span className={styles.picFourDetailsPlace}>Singapore</span>
                    </div>
                </div>
                <img src={require('../../assets/img/pic5.png')} alt="pic5" />
                <img src={require('../../assets/img/pic6.png')} alt="pic6" />
            </div>
        </section>
    )
}

export default ReviewEtour