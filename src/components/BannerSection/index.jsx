import { username } from "../../data/user"

import banner from "../../assets/banner-img.png"

import styles from "./style.module.css"

function BannerSec (){
    return (
        <section className={styles.section}>
            <div>
                <p className={styles.name}>{username}</p>
                <h1 className={styles.title}>Bem vindo ao meu portfolio</h1>
                <p className={styles.text}>Uma frase interessante sobre mim</p>
                <button className={styles.button}>Saiba mais</button>
            </div>
            <img className={styles.img} src={banner} alt="Banner" />
        </section>
    )
}

export default BannerSec