import Link from 'next/link'
import ApexChart from '../ApexChart'
import styles from '../Profitable/Profitable.module.css'
import React from 'react'


export default function Box({ item, className }) {
    return (
        <Link href="#" className={`${styles.box} ${className}`}>
            <div className={styles.currency_info_holder}>
                <div className={styles.currency}>
                    <img src={item.icon.src} className={styles.currency_img} alt="currency" />
                    <ul className={styles.currency_name_holder}>
                        <li className={styles.currency_name}>{item.name} </li>
                        <li className={styles.currency_short_name}>{item.shortName}</li>
                    </ul>
                </div>

                <div className={styles.currency_chart_holder}>
                    <span className={styles.percent}>{item.percent}</span>
                    {item.type != 2 &&
                        <div id="app3" className={styles.currency_chart}>
                            <ApexChart strokeColor="var(--green)" />
                        </div>
                    }
                </div>
            </div>

            {item.type != 2 &&
                <ul className={styles.currency_price}>
                    <li>قیمت امروز<span>{item.today}</span></li>
                    {item.type == 1 &&
                        <>
                            <li>پایین‌ترین قیمت<span>{item.low}</span></li>
                            <li>بالاترین قیمت<span>{item.high}</span></li>
                        </>
                    }

                </ul>
            }
        </Link>
    )
}
