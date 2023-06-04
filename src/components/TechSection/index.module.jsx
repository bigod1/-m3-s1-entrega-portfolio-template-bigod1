import { technologies } from "../../data/technologies"
import { TechCard } from "../TechCard"

import styles from "./style.module.css"

function TechSection (){
    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>Tecnologias</h1>
            <ul className={styles.ul}>
                <TechCard img = {technologies[0].img} tech = {technologies[0].name} />
                <TechCard img = {technologies[1].img} tech = {technologies[1].name} />
                <TechCard img = {technologies[2].img} tech = {technologies[2].name} />
                <TechCard img = {technologies[3].img} tech = {technologies[3].name} />
            </ul>
        </section>
    )
}

export default TechSection