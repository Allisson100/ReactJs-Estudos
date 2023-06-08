import styles from './styles.module.css'

import FacebookIcon from '../../assets/icons/FacebookIcon'
import InstagramIcon from '../../assets/icons/InstagramIcon'
import YoutubeIcon from '../../assets/icons/YoutubeIcon'
import TwitterIcon from '../../assets/icons/TwitterIcon'

function Footer () {
    return (
        <footer className={styles.footerContainer}>
            <div className={styles.footerOpacity}>
                <div className={styles.footerListeeTravel}>
                    <h1>Listee Travel</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <div className={styles.footerIconsContainer}>
                        <span className={styles.footerIcon}><FacebookIcon/></span>
                        <span className={styles.footerIcon}><InstagramIcon /></span>
                        <span className={styles.footerIcon}><YoutubeIcon/></span>
                        <span className={styles.footerIcon}><TwitterIcon/></span>                        
                    </div>
                </div>
                
                <nav className={styles.footerNav}>
                    <h4>About</h4>
                    <ul>
                        <li>Menu</li>
                        <li>Features</li>
                        <li>News & Blogs</li>
                        <li>Help & Supports</li>
                    </ul>
                </nav>

                <nav className={styles.footerNav}>
                    <h4>Company</h4>
                    <ul>
                        <li>How we work</li>
                        <li>Terms of service</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                    </ul>
                </nav>

                <div className={styles.footerContact}>
                    <h4>Contact Us</h4>
                    <div className={styles.contactContent}>
                        <span>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</span>
                        <span>+1 202-918-2132</span>
                        <span>listeetravel@mail.com</span>    
                        <span>www.listeetravel.com</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer