import styles from './styles.module.css'

function SharedPhotos () {
    return (
        <section className={styles.sharedPhotosContainer}>
            <h1>Best Traveler's</h1>
            <h2>Shared photos</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className={styles.photosContainer}>
                <img src={require('../../assets/img/sp1.png')} alt="" />
                <img src={require('../../assets/img/sp2.png')} alt="" />
                <img src={require('../../assets/img/sp3.png')} alt="" />
                <img src={require('../../assets/img/sp4.png')} alt="" />
                <img src={require('../../assets/img/sp5.png')} alt="" />
                <img src={require('../../assets/img/sp6.png')} alt="" />
            </div>
        </section>
        
    )
}

export default SharedPhotos