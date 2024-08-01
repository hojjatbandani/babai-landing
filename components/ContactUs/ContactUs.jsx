import React, { useContext } from 'react'
import styles from '../ContactUs/ContactUs.module.css'
import map from '../../public/images/map.png'
import darkMap from '../../public/images/darkMap.png'
import { CuEmail, CuPhone, DarkCuEmail, DarkCuPhone, DarkEmail, DarkLocation, Email, Location } from '../svg'
import ThemeContext from '../ThemeContext'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function ContactUs() {

    const { theme } = useContext(ThemeContext);

    const contactUs = [
        { icon: <CuEmail />, darkIcon: <DarkCuEmail />, info: 'support@arsonex.com' },
        { icon: <CuPhone />, darkIcon: <DarkCuPhone />, info: <>    021-92004581 &nbsp; &nbsp;  021-92004581</> },
    ]

    const locationInfo = [
        { title: 'آدرس', icon: <Location />, darkIcon: <DarkLocation />, info: 'خیابان ۱۵ خرداد بازار بین الحرمین کوچه شیخ رضا پلاک ۴۶' },
        { title: 'کد پستی', icon: <Email />, darkIcon: <DarkEmail />, info: '1234567890' },
    ]

    return (
        <main className="container">
            <section className={styles.contact_us_banner}>
                <h2 className={`title ${styles.contact_us_title}`}>تماس با آرسونیکس</h2>
                <p className={styles.contact_us_description}>ما اینجا هستیم تا به شما کمک کنیم</p>
            </section>

            <ul className={styles.contact_us_info_sections}>
                {
                    contactUs.map((item, index) => (
                        <li key={index} className={styles.contact_us_box}>
                            <span className={styles.icon}>
                                {theme === 'dark' ? item.darkIcon : item.icon}
                            </span>

                            <span className={styles.detail}>{item.info}</span>
                        </li>
                    ))
                }
            </ul>

            <section className={`${styles.contact_us_info_sections} ${styles.flex_co}`}>
                <div className={styles.contact_us_box}>
                    <ul className={styles.contact_us_location_info}>
                        {locationInfo.map((item, index) => (
                            <li key={index}>
                                <span className={styles.contact_us_location_info_title}>{theme === 'dark' ? item.darkIcon : item.icon}  {item.title}</span>
                                <span className={styles.contact_us_location_info_detail}>{item.info}</span>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.contact_us_social_media_holder}>
                        <h6 className={styles.contact_us_social_media_title}>ما را در شبکه‌های اجتماعی دنبال کنید</h6>

                        <SocialMedia />
                    </div>

                </div>
                <div className={styles.map_holder}>
                    <img src={theme === 'dark' ? darkMap.src : map.src} alt="آدرس" />
                </div>
            </section>
        </main>
    )
}
