import portfolio from "../../assets/portfolio.png"

import styles from "./style.module.css"

function Header () {
    return (
        <header>
            <img className={styles.logo} src= {portfolio} alt="Portfolio" />
            <nav className={styles.headerNav}>
                <p className={styles.navItem}>Sobre</p>
                <p className={styles.navItem}>Stack</p>
                <p className={styles.navItem}>projetos</p>
            </nav>
            <button className={styles.button}>Contato</button>
        </header>
    )
}

export default Header