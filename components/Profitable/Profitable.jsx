import React from 'react'
import Box from '../Box/Box'
import styles from '../Profitable/Profitable.module.css'
import Link from 'next/link'
import crypto from '../../public/images/crypto1.png'
import icon1 from '../../public/images/icon1.png'
import icon2 from '../../public/images/icon2.png'
import icon3 from '../../public/images/icon3.png'
import icon4 from '../../public/images/icon4.png'


export default function Profitable() {
    const currencies = [
        { name: 'یت کوین', shortName: 'BTC', icon: crypto, percent: '220%',today:'25000000',low:'13000000',high:'30000000', type: 1 },
        { name: 'تی‌زدسی', shortName: 'TZC', icon: icon1, percent: '250%',today:'25000000',low:'13000000',high:'30000000', type: 1 },
        { name: 'تی‌زدسی', shortName: 'TZC', icon: icon2, percent: '260%',today:'25000000',low:'13000000',high:'30000000', type: 3 },
        { name: 'تی‌زدسی', shortName: 'TZC', icon: icon3, percent: '350%',today:'25000000',low:'13000000',high:'30000000', type: 3 },
        { name: 'تی‌زدسی', shortName: 'TZC', icon: icon4, percent: '210%',today:'25000000',low:'13000000',high:'30000000', type: 3 },
        { name: 'یت کوین', shortName: 'BTC', icon: crypto, percent: '420%',today:'25000000',low:'13000000',high:'30000000', type: 2 },
        { name: 'یت کوین', shortName: 'BTC', icon: icon1, percent: '580%',today:'25000000',low:'13000000',high:'30000000', type: 2 },
        { name: 'ویوس', shortName: 'WAVES', icon: icon2, percent: '240%',today:'25000000',low:'13000000',high:'30000000', type: 2 },
        { name: 'ویوس', shortName: 'WAVES', icon: icon3, percent: '290%',today:'25000000',low:'13000000',high:'30000000', type: 2 },
        { name: 'ویوس', shortName: 'WAVES', icon: icon4, percent: '720%',today:'25000000',low:'13000000',high:'30000000', type: 2 },
        { name: 'ویوس', shortName: 'WAVES', icon: crypto, percent: '220%',today:'25000000',low:'13000000',high:'30000000', type: 2 },

    ]

    return (
        <section className={styles.profitable_holder}>
            <section className={`${styles.profitable_section} ${styles.d_none}`}>
                <Box item={currencies[0]} className={styles.box1} />
                <Box item={currencies[5]} className={styles.box2} />
                <Box item={currencies[6]} className={styles.box2} />
                <Box item={currencies[2]} className={styles.box3} />
            </section>

            <section className={styles.profitable_section}>
                <Box item={currencies[2]} className={styles.box3} />
                <div className={`${styles.profitable_banner} ${styles.box1}`}>
                    <h3 className={`section_title ${styles.profitable_banner_title}`}>پرسودترین ارزها
                        <br />
                        در روز گذشته</h3>

                    <Link href="#">مشاهده همه</Link>

                </div>
                <Box item={currencies[5]} className={styles.box2} />
                <Box item={currencies[6]} className={styles.box2} />
            </section>

            <section className={styles.profitable_section}>
                <Box item={currencies[5]} className={styles.box2} />
                <Box item={currencies[6]} className={styles.box2} />
                <Box item={currencies[2]} className={styles.box3} />
                <Box item={currencies[0]} className={styles.box1} />
            </section>
        </section>
    )
}
