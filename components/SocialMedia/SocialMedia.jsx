import Link from 'next/link'
import React, { useContext } from 'react'
import { DarkTwitter, Instagram, LinkedIn, Telegram, Twitter } from '../svg'
import styles from './SocialMedia.module.css'
import ThemeContext from '../ThemeContext';

export default function SocialMedia() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    const socialMediaItems = [
        { address: "#", icon: <Telegram />, darkIcon: <Telegram /> },
        { address: "#", icon: <Twitter />, darkIcon: <DarkTwitter /> },
        { address: "#", icon: <Instagram />, darkIcon: <Instagram /> },
        { address: "#", icon: <LinkedIn />, darkIcon: <LinkedIn /> }
    ]

    return (
        <ul className={styles.social_media}>
            {socialMediaItems.map((item, index) => (
                <li key={index}>
                    <Link href={item.address}>
                        {theme === 'dark' ? item.darkIcon : item.icon}
                    </Link>
                </li>
            ))}
        </ul>
    )
}
