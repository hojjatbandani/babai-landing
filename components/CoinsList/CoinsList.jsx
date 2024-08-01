import React, { useContext, useEffect, useState } from 'react'
import Table from '../Table/Table'
import styles from '../CoinsList/CoinsList.module.css'
import crypto from '../../public/images/crypto1.png'
import icon1 from '../../public/images/icon1.png'
import icon2 from '../../public/images/icon2.png'
import icon3 from '../../public/images/icon3.png'
import icon4 from '../../public/images/icon4.png'
import icon6 from '../../public/images/icon6.png'
import icon5 from '../../public/images/icon5.png'
import icon7 from '../../public/images/icon7.png'
import icon8 from '../../public/images/icon8.png'
import SelectBox from '../SelectBox/SelectBox'
import Tab from '../Tab/Tab'
import ThemeContext from '../ThemeContext'


export default function CoinsList() {


    const table1 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]

    const table2 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: icon3, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon4, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
    ]

    const table3 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: icon5, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon3, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon4, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]
    const table4 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
    ]
    const table5 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]
    const table6 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
    ]
    const table7 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]
    const table8 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]
    const table9 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]
    const table10 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'downward', address: "#" },
    ]
    const table11 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: icon4, price: '25,000,000,000', change: '60%+', trends: 'downward', address: "#" },
    ]
    const table12 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
    ]
    const table13 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
    ]
    const fiat = [
        { name: 'بیت کوین', shortName: 'BTC', icon: icon6, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon7, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon8, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon6, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon7, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]

    const [selectedValue, setSelectedValue] = useState('table1');
    const options = [
        { value: 'table1', label: 'همه رمزارزها', content: table1 },
        { value: 'table2', label: 'استیبل کوین', content: table2 },
        { value: 'table3', label: 'میم کوین', content: table3 },
        { value: 'table4', label: 'توکن صرافی', content: table4 },
        { value: 'table5', label: 'متاورس', content: table5 },
        { value: 'table6', label: 'دیفای', content: table6 },
        { value: 'table7', label: 'قرارداد هوشمند', content: table7 },
        { value: 'table8', label: 'اوراکل', content: table8 },
        { value: 'table9', label: 'وب 3,0', content: table9 },
        { value: 'table10', label: 'توکن بازی', content: table10 },
        { value: 'table11', label: 'NFT', content: table11 },
        { value: 'table12', label: 'هوش مصنوعی', content: table12 },
        { value: 'table13', label: 'لایه 2', content: table13 },
    ];


    const [currentTable, setcurrentTable] = useState(table1)
    const [search, setsearch] = useState('')


    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);

    };


    useEffect(() => {
        const tableContent = options.find(item => (
            item.value === selectedValue
        ))
        setcurrentTable(tableContent.content)

    }, [selectedValue])


    const subject = [
        { value: "view", label: "پربازدیدترین", content: table1 },
        { value: "popular", label: "محبوب‌ترین", content: table2 },
        { value: "new", label: "جدیدترین", content: table3 },
    ]

    const [activeTab, setactiveTab] = useState(0)
    const [fiatTable, setfiatTable] = useState(false)


    const handleTabClick = (a, b, c) => {
        setactiveTab(a);
        setcurrentTable(b);
        c === 'fiat' &&
            setfiatTable(true)
    };



    const tabContent = [
        { code: 0, content: table1, title: 'ارز دیجیتال' },
        { code: 1, content: fiat, title: 'فیات دیجیتال', type: 'fiat' },
    ]

    const { theme } = useContext(ThemeContext);
    return (
        <main className={`container ${theme === 'dark' ? 'theme-dark' : ''}`}>
            <section className={styles.coins_list_title_holder}>
                <h2 className={`title ${styles.title}`}>نرخ لحظه‌ای رمزارزها و فیات</h2>
                <Tab tabContent={tabContent} fcn={handleTabClick} activeTab={activeTab} />
            </section>

            <section className={styles.current_rate_holder}>
                <Table currentTable={currentTable} tether={true} fiatTable={fiatTable}>
                    <div className={styles.table_category_item}>
                        <form action="" className={styles.search_holder}>
                            <input type="search" value={search} onChange={(e) => setsearch(e.target.value)} className={styles.search_box} placeholder='جستجو' />
                            <SelectBox key="4" className={styles.select_box} subject={subject} setcurrentTable={setcurrentTable} />
                        </form>

                        <div className={styles.category_holder}>
                            {options.map((option) => (
                                <label
                                    key={option.value}
                                    className={`${styles.button_label} ${selectedValue === option.value ? styles.active : ''}`}
                                >
                                    <input
                                        type="radio"
                                        name="radio-group"
                                        value={option.value}
                                        checked={selectedValue === option.value}
                                        onChange={handleRadioChange}
                                        className={styles.button_input}
                                    />
                                    <span className={styles.button_text}>{option.label}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                </Table>
            </section>
        </main>
    )
}
