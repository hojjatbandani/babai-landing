import Link from 'next/link';
import React, { useContext, useState } from 'react';
import styles from '../Header/Header.module.css';
import ThemeContext from '../ThemeContext';
import PhoneMenu from './PhoneMenu';
import { DarkPhoneBlog, DarkPhoneCall, DarkPhoneLogo, DarkPhoneMenuIcon, PhoneBlog, PhoneCall, PhoneLogo, PhoneMenuIcon } from '../svg';

export default function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [activeMenu, setactiveMenu] = useState(false)
    const menuItems = [
        { title: "بازارها", icon: <PhoneCall />, address: "/coinsList", DarkIcon: <DarkPhoneCall /> },
        { title: "بلاگ", icon: <PhoneBlog />, address: "#", DarkIcon: <DarkPhoneBlog /> },
        { title: "درباره ما", icon: <PhoneLogo />, address: "/aboutUs", DarkIcon: <DarkPhoneLogo /> },
        { title: "تماس با ما", icon: <PhoneCall />, address: "contactUs", DarkIcon: <DarkPhoneCall /> },
    ]

    const menuBtn = [
        { title: "ورود", address: "#", class: styles.login, phoneClass: styles.phone_login },
        { title: "ثبت نام", address: "#", class: styles.signup, phoneClass: styles.phone_signup },
    ]

    return (
        <header className={`container ${styles.header_holder}  ${theme === 'dark' ? 'theme-dark' : ''}`}>
            <div className={styles.logo_holder}>
                <button className={styles.phone_menu_btn} onClick={() => setactiveMenu(true)}>
                    {theme === 'dark' ? <DarkPhoneMenuIcon /> : <PhoneMenuIcon />}
                </button>

                {activeMenu && <PhoneMenu {...{ setactiveMenu, menuItems,menuBtn }} />}

                <h1 className={`${styles.header_title} ${theme === 'dark' && styles.dark_header_title}`}>آرسیونیکس</h1>
            </div>

            <nav className={styles.menu}>
                {menuItems.map((item, index) => (
                    <Link key={index} href={item.address}>{item.title}</Link>
                ))}
            </nav>

            <div className={styles.header_buttons_holder}>
                <label className={`${styles.switch} ${styles.larg}`}>
                    <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
                    <span className={`${styles.slider} ${styles.round}`}></span>
                </label>

                {menuBtn.map((item, index) => (
                    <Link key={index} className={item.class} href={item.address}>{item.title}</Link>
                ))}
            </div>
        </header>
    );
}
