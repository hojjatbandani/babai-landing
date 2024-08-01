import React from 'react'
import styles from '../Tab/Tab.module.css'


export default function Tab({ tabContent, fcn, activeTab }) {
    return (
        <div className={styles.switch_box}>
            {tabContent.map((item, index) => (
                <button
                key={index}
                    onClick={() => fcn(item.code, item.content, item.type)}
                    className={`${styles.switch_button} ${activeTab === item.code ? styles.switch_button_active : null}`}
                >
                    {item.title}
                </button>
            ))}
        </div>
    )
}
