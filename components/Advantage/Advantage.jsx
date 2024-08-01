import Link from 'next/link'
import styles from '../Advantage/Advantage.module.css'

export default function Advantage({children,className,title,description,address}) {
    return(
        <div className={`${styles.options} ${className}`} >
            <article className={styles.options_description}>
                <h3 className="section_title">{title}</h3>
                <p className={styles.options_description_text}>{description}</p>
                <Link className={styles.options_description_link} href={address}>اطلاعات بیشتر</Link>
            </article>

            <section className={styles.left_section}>
                <div className={styles.action_holder}>
                   {children}
                </div>
            </section>
        </div>
    )
}