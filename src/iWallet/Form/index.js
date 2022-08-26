import React, { useState } from "react";
import styles from "./styles.module.css";

const initialValue = { name: "", price: 0, description: "" };

export default function Form({ spendlist, setSpendlist }) {

    const [spend, setSpend] = useState(initialValue);

    const onChangeInput = (e) => {
        if (e.target.name === "price") {

            setSpend({ ...spend, [e.target.name]: Number(e.target.value) })


        } else {

            setSpend({ ...spend, [e.target.name]: e.target.value })
        }
    }

    const onSubmit = () => {
        if (spend.name === "" || spend.price === 0  || spend.description === "" ) {
            return false;
        }
        console.log(spend);
        setSpendlist([...spendlist, spend])
        console.log("Spendlist:",spendlist);

        setSpend(initialValue);
    }

    return (
        <div className={styles.form}>
            <input placeholder="Enter to spend" name="name" value={spend.name} onChange={onChangeInput} />
            <input placeholder="Enter to price" type="number" name="price" value={spend.price} onChange={onChangeInput} />
            <input placeholder="Enter to desc" name="description" value={spend.description} onChange={onChangeInput} />
            <button onClick={onSubmit} >Add</button>
        </div>
    )
}