import React, { useEffect, useState } from 'react'
import Advantage from './Advantage'
import SelectBox from '../SelectBox/SelectBox'
import styles from '../Advantage/Advantage.module.css'
import MgIcon from "../../public/images/iran.png";
import UeIcon from "../../public/images/usa.png";
import { ChangeTo, DarkChangeTo } from '../svg';
import crypto from '../../public/images/crypto1.png'
import icon1 from '../../public/images/icon1.png'
import icon2 from '../../public/images/icon2.png'
import icon3 from '../../public/images/icon3.png'



export default function Advantages({ dark }) {
    const countries = [
        { value: "toman", label: "تومان", icon: MgIcon.src },
        { value: "dollar", label: "دلار", icon: UeIcon.src }
    ];

    const subject = [
        { value: "subject1", label: "انتخاب موضوع" },
        { value: "subject2", label: "انتخاب موضوع2" }
    ]

    const [cryptoData, setCryptoData] = useState([
        {
            icon: crypto,
            name: 'بیت کوین',
            shortName: 'BTC',
            buyPrice: 25000000000,
            sellPrice: 25000000000,
        },
        {
            icon: icon1,
            name: 'اتریوم',
            shortName: 'ETH',
            buyPrice: 15000000000,
            sellPrice: 15000000000,
        },
        {
            icon: icon2,
            name: 'پالکادوت',
            shortName: 'Polkadot',
            buyPrice: 5000000000,
            sellPrice: 5000000000,
        },

        {
            icon: icon3,
            name: 'ریون کوین',
            shortName: 'Ravencoin',
            buyPrice: 7000000000,
            sellPrice: 15000000000,
        },
    ]);

    const [currentIndex, setCurrentIndex] = useState(0);

    const [change, setchange] = useState({
        changeFrom: "100000",
        changeTo: "",
        support: ""
    });

    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setchange({ ...change, [name]: value });
    };


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % cryptoData.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [cryptoData, currentIndex]);

    const currentCrypto = cryptoData[currentIndex];

    return (
        <section className={styles.options_holder}>

            <Advantage
                className={styles.adv1}
                title="به راحتی دلار، یورو، لیر و سایر ارزها را معامله کنید"
                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون سطر آنچنان که لازم است،"
                address="#"
            >
                <form>
                    <div className={styles.input_holder}>
                        <input type="text" name="changeFrom" value={change.changeFrom} onChange={handleChangeForm} />
                        <SelectBox key="1" className={styles.select_box} subject={countries} optionsClass={styles.select_ptions} />
                    </div>

                    <span className={styles.change_to}>
                        {dark ? <DarkChangeTo /> : <ChangeTo />}
                    </span>

                    <div className={styles.input_holder}>
                        <input type="text" name="changeTo" value={change.changeTo} onChange={handleChangeForm} />
                        <SelectBox key="2" className={styles.select_box} subject={countries} optionsClass={styles.select_ptions} />
                    </div>

                    <button className={styles.actions_button}>خرید</button>
                </form>
            </Advantage>


            <Advantage
                className={styles.adv2}
                title="24 ساعته پشتیبانی آرسونیکس پاسخگوی شما خواهد بود"
                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون سطر آنچنان که لازم است،"
                address="#"
            >
                <form>
                    <SelectBox key="3" className={styles.select_subject} subject={subject} />

                    <div className={`${styles.input_holder} ${styles.mt_25}`}>
                        <input type="text" name='support' placeholder='توضیحات' value={change.support} onChange={handleChangeForm} />
                    </div>

                    <button className={styles.actions_button}>درخواست پشتیبانی</button>
                </form>
            </Advantage>


            <Advantage
                className={styles.adv3}
                title={<>با کمترین نرخ کارمزد، <br />خرید و فروش کنید</>}
                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون سطر آنچنان که لازم است،"
                address="#"
            >
                <div className={styles.commission}>
                    <h6>نرخ کارمزد</h6>

                    <ul className={`${styles.commission_chart} ${dark && styles.dark_commission_chart}`}>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </Advantage>


            <Advantage
                className={styles.adv4}
                title={<>با یک نرخ بفرشید <br /> و با همان نرخ بخرید</>}
                description="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک چاپگرها و متون بلکه روزنامه و مجله در ستون سطر آنچنان که لازم است،"
                address="#"
            >
                <div className={styles.currency}>
                    <img src={currentCrypto.icon.src} className={styles.currency_img} alt="currency" />

                    <ul className={styles.currency_name_holder}>
                        <li className={styles.currency_name}>{currentCrypto.name}</li>
                        <li className={styles.currency_short_name}>{currentCrypto.shortName}</li>
                    </ul>
                </div>

                <ul className={styles.price}>
                    <li>قیمت خرید <span>{currentCrypto.buyPrice}</span></li>
                    <li>قیمت فروش <span>{currentCrypto.sellPrice.toLocaleString()}</span></li>
                </ul>

                <button className={styles.actions_button}>خرید و فروش</button>
            </Advantage>
        </section>
    )
}
