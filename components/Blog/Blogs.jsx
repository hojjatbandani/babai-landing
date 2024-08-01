import React from 'react'
import styles from '../Blog/Blog.module.css'
import Link from 'next/link'
import Blog from './Blog'


export default function Blogs() {

    const blogData = [
        {
            title: 'تحلیل بنیادی ارزهای دیجیتال',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون سطر آنچنان که لازم است،',
            date: '29دی1402',
            author: 'محمد محمدی'
        },
        {
            title: 'بررسی آینده بازار ارزهای دیجیتال',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون سطر آنچنان که لازم است،',
            date: '15اسفند1402',
            author: 'سارا احمدی'
        },
        {
            title: 'تاثیر هوش مصنوعی در بازار ارزهای دیجیتال',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون سطر آنچنان که لازم است،',
            date: '5فروردین1403',
            author: 'علی کریمی'
        },
        {
            title: 'چگونه در بازار ارزهای دیجیتال سود کسب کنیم',
            content: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون سطر آنچنان که لازم است،',
            date: '20فروردین1403',
            author: 'زهرا رضایی'
        }
    ]

    return (
        <section className={styles.blog_holder}>
            <div className={styles.blog_title_holder}>
                <h3 className={`section_title ${styles.blog_title}`}>آخرین مطالب وبلاگ آرسونیکس</h3>
                <Link href="#">مشاهده همه</Link>
            </div>

            {blogData.map((blog, index) => (
                <Blog
                    key={index}
                    title={blog.title}
                    content={blog.content}
                    date={blog.date}
                    author={blog.author}
                    className={index === 1 ? `${styles.blog2} ${styles.bg}` : index === 3 ? styles.blog3 : styles.blog2}
                />
            ))}
        </section>
    )
}
