import React from "react";
import styles from '../Table/Table.module.css'
import Link from "next/link"
import ApexChart from "../ApexChart";

export default function Table({ currentTable, children, tether }) {

    return (
        <div className={styles.current_rate_container}>
            <header className={styles.current_rate_header}>
                {children}
            </header>

            <div className={styles.table_holder}>
                <table className={styles.current_rate_table}>
                    <thead>
                        <tr>
                            <th className="text_right">ارز</th>
                            <th>قیمت واحد</th>
                            <th>تغییرات 24 ساعته</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentTable && currentTable.map((item, index) => (
                            <tr key={index}>
                                <td>
                                    <div className={styles.currency}>
                                        <img src={item.icon.src} className={`${styles.currency_img} ${styles.fiat_icon}`} alt={item.shortName} />
                                        <ul className={styles.currency_name_holder}>
                                            <li className={styles.currency_name}>{item.name}</li>
                                            <li className={styles.currency_short_name}>{item.shortName}</li>
                                        </ul>
                                    </div>
                                </td>

                                <td className={styles.price}>
                                    <span className={styles.toman}> {item.price}</span>
                                    {tether && <span className={styles.tether}> {item.price}</span>}
                                </td>

                                <td className={`${styles.changes} ${item.trends == 'upward' ? styles.upward : styles.downward}`}>{item.change}</td>

                                <td className={styles.chart_holder}>
                                    <ApexChart strokeColor={`${item.trends == 'upward' ? "var(--green)" : "var(--red)"}`} />
                                </td>

                                <td>
                                    <Link href={item.address} className={styles.bargain}>خرید و فروش</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}