import {FaFacebook,FaInstagram,FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer>
            <p>Esse é o Rodapé</p>
            <ul className={styles.social_list}>
                <li><FaFacebook/></li>
                <li><FaInstagram/></li>
                <li><FaLinkedin/></li>
            </ul>
        </footer>
    )
}

export default Footer