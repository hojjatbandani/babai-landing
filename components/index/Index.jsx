import React, { useContext, useState } from "react";
import styles from './index.module.css'
import Link from "next/link"
import Dashboard from '../../public/images/Dashboard.png'
import crypto from '../../public/images/crypto1.png'
import icon1 from '../../public/images/icon1.png'
import icon2 from '../../public/images/icon2.png'
import icon3 from '../../public/images/icon3.png'
import icon4 from '../../public/images/icon4.png'
import dynamic from 'next/dynamic';
import Accordion from "../Accordion/Accordion";
import Table from "../Table/Table";
import Tab from "../Tab/Tab";
import Advantages from "../Advantage/Advantages";
import Profitable from "../Profitable/Profitable";
import ThemeContext from "../ThemeContext";
import Blogs from "../Blog/Blogs";

// Dynamically import the ApexChart component
// const ApexChart = dynamic(() => import('../ApexChart'), { ssr: false });



const accordionData = [
    {
        title: 'چه ارزهایی در آرسونیکس قابل معامله با هم هستند؟',
        description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
    },
    {
        title: 'چه روش‌های معاملاتی در آرسونیکس وجود دارید؟',
        description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
    },
    {
        title: 'نگهداری فیات‌های دیجیتال در آرسونیکس چقدر امن است؟',
        description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
    },
    {
        title: 'نگهداری ارزهای دیجیتال در آرسونیکس چقدر امن است؟',
        description: 'در شرایط غیرعادی و وقوع اتفاقات ناگهانی، مانند بلایای طبیعی، جنگ، شورش، اعتصاب، تحریم، قطع ارتباطات داخلی و بین‌المللی، آرسونیکس کلیه تلاش‌های لازم را برای ارائه خدمات خود به کاربران انجام می‌دهد. اما در نهایت، مسئولیتی در قبال انجام نشدن تعهدات خود ندارد.'
    },
];


export default function Index() {

    const table1 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '25,000,000,000', change: '60%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]

    const table2 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: icon3, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon4, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]

    const table3 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon3, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon4, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]

    const table4 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
    ]

    const table5 = [
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon3, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon4, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon2, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon3, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon4, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: icon1, price: '8,000,000,000', change: '30%+', trends: 'downward', address: "#" },
        { name: 'بیت کوین', shortName: 'BTC', icon: crypto, price: '8,000,000,000', change: '30%+', trends: 'upward', address: "#" },
    ]

    const [activeTab, setactiveTab] = useState(0)
    const [currentTable, setcurrentTable] = useState(table1)


    const handleTabClick = (a, b) => {
        setactiveTab(a);
        setcurrentTable(b)
    };


    const tabContent = [
        { code: 0, content: table1, title: 'ارز دیجیتال' },
        { code: 1, content: table2, title: 'فیات دیجیتال' },
    ]

    const tabContent2 = [
        { code: 2, content: table3, title: 'پرسود ترین' },
        { code: 3, content: table4, title: 'محبوب ترین' },
        { code: 4, content: table5, title: 'جدید ترین' },
    ]
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <main className={`container ${theme === 'dark' ? 'theme-dark' : ''}`}>
            <section className={styles.banner}>
                <div className={styles.banner_title_holder}>
                    <h2 className={`title ${styles.bannert_title}`}>معامله ارز دیجیتال و جابجایی بین‌المللی فیات</h2>
                    <p className={styles.banner_description}>در آرسونیکس، ارزهای دیجیتال یا ارزهای رایج مانند دلار، پوند، لیر و ریال را سریع و امن معامله کنید و به‌راحتی ارزهای رایج را از یک کشور به کشور دیگر منتقل کنید.</p>
                    <Link href='#' className={styles.blue_btn}>همین حالا امتحان کنید</Link>
                </div>
                <img src={Dashboard.src} className={styles.dashboard_img} alt="Dashboard" />
            </section>


            <section className={styles.current_rate_holder}>
                <Table currentTable={currentTable} >
                    <Tab tabContent={tabContent} fcn={handleTabClick} activeTab={activeTab} />
                    <h3 className={`section_title ${styles.current_rate_header_title}`}>نرخ لحظه‌ای رمزارزها</h3>
                    <Tab tabContent={tabContent2} fcn={handleTabClick} activeTab={activeTab} />
                </Table>

                <Link href='#' className={styles.blue_btn}>مشاهده همه ارزها</Link>
            </section>

            <Advantages dark={theme === 'dark'} />

            <Profitable />

            <section className={styles.acc_holder}>
                <div className={styles.acc_holder_title_holder}>
                    <h3  className="section_title" >سوالاتی که ممکن است برای شما بوجود آمده باشد</h3>
                </div>

                <div className={styles.acc_container}>
                    {accordionData.map((item, index) => (
                        <Accordion key={index} item={item} dark={theme === 'dark'} className={styles.question_acc} />
                    ))}

                    <div className={styles.find_answer}>
                        <span className={styles.find_answer_title}>پاسخ سوال خود را نیافتید؟</span>
                        <Link href="#">مرکز راهنمایی آرسونیکس</Link>
                    </div>
                </div>
            </section>

            <Blogs />
        </main>
    )
}