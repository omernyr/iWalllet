import React from "react";
import styles from "./styles.module.css";
import img from "./resim.jpeg";



export default function Header() {
    return (
        <div className={styles.header}>
            <h3>iWallet</h3> <img className={styles.header_photo} src={img}/>
        </div>
    )
}