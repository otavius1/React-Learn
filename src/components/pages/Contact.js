import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from '../layouts/Footer.module.css'

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <div className={styles.contact}>
                <ul className={styles.social_list_contact}>
                    <li>
                        <FaFacebook />
                    </li>
                    <li>
                        <FaInstagram />
                    </li>
                    <li>
                        <FaLinkedin />
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Contact 