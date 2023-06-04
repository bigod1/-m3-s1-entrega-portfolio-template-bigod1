import git from "../../assets/git-icon.png"

import styles from "./style.module.css"

export function ProjectCard ({ name, description }){
    return(
        <>
           <li className={styles.li}>
                <div className={styles.div}>
                    <p className={styles.name}>{name}</p>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.mais}>Saiba Mais</p>
                </div>
                <img className={styles.img} src={git} alt="Imagem do GIT" />
            </li>
        </>
    )
}

export default ProjectCard