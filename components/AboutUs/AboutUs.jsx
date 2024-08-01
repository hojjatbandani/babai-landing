import React, { useContext } from 'react'
import styles from '../AboutUs/AboutUs.module.css'
import bannerBg from '../../public/images/au.png'
import image1 from '../../public/images/img1.png'
import darkImage1 from '../../public/images/darkImage1.png'
import image2 from '../../public/images/img2.png'
import ThemeContext from '../ThemeContext'

export default function AboutUs() {
    const { theme } = useContext(ThemeContext);

    return (
        <main className={`container ${theme === 'dark' ? 'theme-dark' : ''}`}>
            <section className={styles.about_us_banner}>
                <h2 className={`title ${styles.about_us_title}`}>آرسونیکس، همراه ارز دیجیتال شما</h2>
                <p className={styles.about_us_description}>از زمان ظهور دنیای ارز دیجیتال و ورود سریع کاربران ایرانی به این عرصه، همواره نیاز به یک پلتفرم تک نرخی صرافی ارز دیجیتال در حالت معامله آسان و فوری احساس می‌شد. نبود چنین امکانی می‌تواند برای معامله‌گران، در تبادل ارزهای دیجیتال اختلافی چشم گیر در مبلغ نهایی ایجاد کند</p>
                <img className={styles.about_us_banner_img} src={bannerBg.src} alt="آرسونیکس،" />
            </section>

            <section className={styles.about_us_description_holder}>
                <p className={styles.about_us_description_text}>آرسونیکس (هور تابان تبادل الکترونیک)، به عنوان اولین صرافی ارز دیجیتال در ایران با ارائه ویژگی ذکر شده، برای رفع نیاز این دسته از کاربران ارائه شده و با رفع این نیاز، امکان مبادله‌ی دارایی‌های دیجیتال به صورت تک نرخی را در اختیار کاربران گذاشته است.</p>
                <img className={styles.about_us_description_img} src={theme === 'dark' ? darkImage1.src : image1.src} alt="آرسونیکس" />
            </section>

            <section className={styles.about_us_description_holder}>
                <img className={styles.about_us_description_img} src={image2.src} alt="آرسونیکس" />
                <p className={styles.about_us_description_text}>آرسونیکس همچنین با فراهم آوردن امکان معامله برای افراد مقیم خارج از کشور پا به عرصه ظهور گذاشته و این قابلیت را به کاربران می‌دهد که به روش‌های مختلفی، از جمله تبدیل دارایی‌های خود در کشوری که در آن اقامت دارند (بصورت کاملا قانونی)، به تومان یا ارزهای دیجیتال از تغییرات بازار بهره‌مند شوند و دارایی‌های خود را بدون مشکل معامله کنند.</p>
            </section>
        </main>
    )
}
