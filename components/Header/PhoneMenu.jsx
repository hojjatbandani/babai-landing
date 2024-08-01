import Link from 'next/link'
import React, { useContext } from 'react'
import styles from './Header.module.css'
import ThemeContext from '../ThemeContext';
import { CloseMenu, DarkCloseMenu, DarkPhoneTheme, PhoneTheme } from '../svg';

export default function PhoneMenu({ setactiveMenu, menuItems, menuBtn }) {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={styles.phone_menu_holder}>
            <header className={styles.phone_menu_holder_header}>
                <h2 className={`${styles.header_title} ${theme === 'dark' && styles.dark_header_title}`}>آرسیونیکس</h2>

                <button className={styles.phone_menu_btn} onClick={() => setactiveMenu(false)}>
                    {theme === 'dark' ? <DarkCloseMenu /> : <CloseMenu />}
                </button>
            </header>

            <ul className={styles.phone_menu}>
                {menuItems.map((item, index) => (
                    <li key={index}>
                        <Link href={item.address}>
                            {theme === 'dark' ? item.DarkIcon : item.icon}
                            {item.title}
                        </Link>
                    </li>
                ))}


                <li className={styles.switch_holder}>
                    <span className={styles.switch_holder_title}>
                        {theme === 'dark' ? <DarkPhoneTheme /> : <PhoneTheme />}
                        تغییر تم
                    </span>

                    <label className={styles.switch}>
                        <input type="checkbox" checked={theme === 'light'} onChange={toggleTheme} />
                        <span className={`${styles.slider} ${styles.round}`}></span>
                    </label>
                </li>
            </ul>

            <div className={styles.phone_header_buttons_holder}>
                {menuBtn.map((item, index) => (
                    <Link key={index} className={item.phoneClass} href={item.address}>{item.title}</Link>
                ))}
            </div>
        </div>
    )
}
