import whats from "../../assets/whatsapp-icon.png"
import linkedin from "../../assets/linkedin-icon.png"
import github from "../../assets/github-icon.png"

import { user } from "../../data/user"

import styles from "./style.module.css"

function Footer (){
    return (
        <footer>
            <div className={styles.div__contato}>
                <h1 className={styles.contact}>Contato</h1>
                <nav className={styles.nav}>
                    <img className={styles.img} src={whats} alt="WhatsApp icon" />
                    <img className={styles.img} src={linkedin} alt="Linkedinn icon" />
                    <img className={styles.img} src={github} alt="GitHub icon" />
                </nav>
            </div>
            <p className={styles.direitos}>Todos os direitos reservados - {user}</p>
        </footer>
    )
}

export default Footer