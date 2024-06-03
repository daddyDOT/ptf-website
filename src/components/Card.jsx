import React from 'react'
import styles from './Card.module.css'
const Card = () => {
  return (
    <div className={styles.body}>
        <div className={styles.img}>
            <div className={styles.circle}>
                <p className={styles.datumbroj}>00</p>
                <p className={styles.datumnaziv}>JAN</p>
            </div>
            <div className={styles.square}></div>
        </div>
            <div className={styles.underimage}>
                <div className={styles.text}>
                    <h1 className={styles.header}>HEADER Kartice</h1>
                    <p className={styles.description}>Description Kartice</p>
                </div>
                <div className={styles.itemdiv}>
                    <div className={styles.itemimg}></div>
                    <p className={styles.itemtext}>6 min. read</p>
                </div>
            </div>
    </div>
  )
}

export default Card