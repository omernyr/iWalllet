import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "./styles.module.css";

export default function Totalbalance({ spendlist }) {

    const [totalbalance, setTotalbalance] = useState(0);

    useEffect(() => {
        let total = 0;
        spendlist.forEach(item => {
            total += item.price
        })
        setTotalbalance(total)
    }, [spendlist])

    return (
        <div>
            <h3 className={styles.price} > ${450 - totalbalance} </h3>
        </div>
    )
}