import { ProjectCard } from "../ProjectCard"
import { projects } from "../../data/projects"

import styles from "./style.module.css"

function ProjectSection (){
    return (
        <section className={styles.section}>
            <h1 className={styles.h1}>Projetos</h1>
            <ul className={styles.ul}>
                <ProjectCard name = {projects[0].name} description = {projects[0].description} />
                <ProjectCard name = {projects[1].name} description = {projects[1].description} />
                <ProjectCard name = {projects[2].name} description = {projects[2].description} />
                <ProjectCard name = {projects[3].name} description = {projects[3].description} />
            </ul>
        </section>
    )
}

export default ProjectSection