import React, { useState } from "react";
import styles from "./styles.module.css";

export default function Spendinglist({ spendlist, setSpendlist }) {


    return (
        <div className={styles.container}>
            <span className={styles.expend}>
            Expend List ({spendlist.length})
            </span>
            <ul className={styles.list}>
                {spendlist.map((spend) => <li key={spend.name}>
                    <div className={styles.name_and_price}>
                        <span>
                            {spend.name}
                        </span>
                        <span className={styles.price}>
                            -{spend.price}
                        </span>
                    </div>
                    <div className={styles.descr}>
                        <span>
                            {spend.description}
                        </span>
                    </div>
                </li>)}
            </ul>
        </div>
    )
}