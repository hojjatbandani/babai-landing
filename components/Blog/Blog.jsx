import React, { useContext } from 'react'
import styles from '../Blog/Blog.module.css'
import Link from 'next/link'
import user from '../../public/images/user.png'
import ThemeContext from '../ThemeContext';

export default function Blog({ className, title, author, date, content }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`${className} ${styles.blogs} ${theme === 'dark' ? styles.darkBlog : ''}`}>
            <h6>{title}</h6>
            <p>{content}</p>
            <div className={styles.blog_info}>
                <span className={styles.date}>{date}</span>
                <div className={styles.user_info}>
                    <img className={styles.user_info_img} src={user.src} alt={author} />
                    <span className={styles.name}>{author}</span>
                </div>
            </div>

            <Link href="#" className={styles.more}>مشاهده همه</Link>
        </div>
    )
}
