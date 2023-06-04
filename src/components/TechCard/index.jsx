import styles from "./style.module.css"

export function TechCard ({ img, tech }){
    return(
        <>
            <li className={styles.li}>
                <img className={styles.img} src={img} alt="" />
                <p className={styles.p}>{tech}</p>
            </li>
        </>
       
    )
}

export default TechCard