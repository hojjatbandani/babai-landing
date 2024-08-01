import React, { useContext } from 'react'
import styles from '../Footer/Footer.module.css'
import Link from 'next/link'
import { Location, Email, DarkEmail, DarkLocation, DarkPhoneCall, PhoneCall } from '../svg'
import ThemeContext from '../ThemeContext'
import SocialMedia from '../SocialMedia/SocialMedia'


export default function Footer() {
    const footerMenu = [
        {
            title: "آرسونیکس", menuItems: [
                { label: "درباره ما", address: "#" },
                { label: "تماس با ما", address: "#" },
                { label: "کارمزدها", address: "#" },
                { label: "قوانین و مقررات", address: "#" },
                { label: "بروزرسانی‌ها", address: "#" },
            ]
        },
        {
            title: "راهنمای استفاده", menuItems: [
                { label: "مرکز راهنمایی", address: "#" },
                { label: "معامله ارز دیجیتال", address: "#" },
                { label: "معامله فیات دیجیتال", address: "#" },
                { label: "احراز هویت فوری", address: "#" },
                { label: "درباره ما", address: "#" },
            ]
        },
        {
            title: "امکانات", menuItems: [
                { label: "معامله سریع تک نرخی", address: "#" },
                { label: "واریز و برداشت بین‌المللی", address: "#" },
                { label: "آروسونیکس کارت", address: "#", dataLabel: "بزودی" },
                { label: "کسب درآمد", address: "#", dataLabel: "تا سقف %30" },
            ]
        }
    ]

    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <footer className={`${styles.footer_holder} container`}>
            <section className={styles.footer_content}>
                <article className={styles.footer_about}>
                    <h4 className={`${styles.footer_about_title} ${theme === 'dark' && styles.dark_footer_about_title}`}>آرسیونیکس</h4>
                    <p className={styles.footer_about_description}>از زمان ظهور دنیای ارز دیجیتال و ورود سریع کاربران ایرانی به این عرصه، همواره نیاز به یک پلتفرم تک نرخی صرافی ارز دیجیتال در حالت معامله آسان و فوری احساس می‌شد. نبود چنین امکانی می‌تواند برای معامله‌گران، در تبادل ارزهای دیجیتال اختلافی چشم گیر در مبلغ نهایی ایجاد کند</p>
                </article>

                <nav className={styles.footer_menu_list}>
                    {footerMenu.map((category, index) => (
                        <ul key={index}>
                            <li className={styles.list_title}>{category.title}</li>
                            {category.menuItems.map((item, index) => (
                                <li key={index} className={item.dataLabel && styles.label} data-label={item.dataLabel}>
                                    <Link href={item.address}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                </nav>


                <div className={styles.footer_info}>
                    <ul className={styles.contact_us}>
                        <li className={styles.list_title}>با ما در ارتباط باشید</li>
                        <li>{theme === 'dark' ? <DarkEmail /> : <Email />}support@arsonex.com</li>
                        <li>{theme === 'dark' ? <DarkPhoneCall /> : <PhoneCall />} 021-92004581</li>
                        <li> {theme === 'dark' ? <DarkLocation /> : <Location />} خیابان ۱۵ خرداد بازار بین الحرمین کوچه شیخ رضا پلاک ۴۶</li>
                    </ul>

                    <SocialMedia />
                </div>
            </section>

            <p className={styles.rights}>1399 تا امروز، تمامی حقوق (مادی و معنوی) این وب سایت برای آرسونیکس محفوظ است.</p>
        </footer>
    )
}
