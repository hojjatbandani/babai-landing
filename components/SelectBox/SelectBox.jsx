import React, { useContext, useState } from 'react'
import ThemeContext from '../ThemeContext';
import styles from '../SelectBox/SelectBox.module.css'

export default function SelectBox({className, subject, setcurrentTable,optionsClass }) {
    const [selectedItem, setselectedItem] = useState(subject[0]);
    const [isOpen, setIsOpen] = useState(false);

    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (item) => {
        setselectedItem(item);
        setIsOpen(false);

        item.content &&
        setcurrentTable(item.content)
    };
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div onClick={handleDropdownToggle} className={`${styles.select_box_holder} ${className}`}>
            <div  className={`${styles.select_box}  ${`${theme === 'dark' && styles.dark_select}`}`}>
                {selectedItem.icon ? (
                    <img src={selectedItem.icon} alt={selectedItem.label} />
                ) : null}
                {selectedItem.label}
            </div>
            {isOpen && (
                <div className={`${styles.options_list} ${optionsClass}`}>
                    {subject.map((item) => (
                        <div
                            key={item.value}
                            className={styles.options_item}
                            onClick={() => handleOptionClick(item)}
                        >
                            {item.icon ? (
                                <img src={item.icon} alt={item.label} style={{ width: 20, height: 20, marginRight: 10 }} />
                            ) : null}
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
