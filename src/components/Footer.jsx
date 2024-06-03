import React from 'react'
import styles from "./Footer.module.css";
import { CiFacebook } from 'react-icons/ci';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';

const ScrollBox = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.footerGornji}>
            <div className={styles.gornjiLeft}>
                <h1 className>Chobani</h1>
                <div className={styles.container}>
                    <div className={styles.coloumn}>
                        <ul>
                            <li>Carrers</li>
                            <li>Our Cafe</li>
                            <li>Chobani News</li>
                            <li>Foodservice</li>
                        </ul>
                    </div>
                    <div className={styles.coloumn}>
                        <ul>
                            <li>Consumer Care</li>
                            <li>Alumini</li>
                            <li>Chobani Canada</li>
                            <li>Chobani Mexico</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.ikone}>
    
                <FaFacebookSquare />
                <FaInstagram />
                <SlSocialTwitter />
            
                </div>

    </div>
            <div className={styles.gornjiRight}>
                    <p>Nesto bezveze</p>
            </div>
        </div>

        <div className={styles.footerDonji}>
        <ul className={styles.footerList}>
            <li className={styles.prvi}>
                <ul>
                    <li>Website Terms</li>
                    <li>|</li>
                    <li>Privacy Policy</li>
                    <li>|</li>
                    <li>Website Terms</li>
                    <li>|</li>
                    <li>Website Terms</li>
                    <li>|</li>
                    <li>Website Terms</li>
                    <li>|</li>
                    <li>Website Terms</li>
                </ul>
            </li>
            <li className={styles.drugi}>
                <ul>
                    <li>Website Terms</li>
                    <li>|</li>
                    <li>Website Terms</li>
                    <li>|</li>
                </ul>
            </li>
            <li className={styles.treci}>
                <ul>
                    <li>2021 Chobani, All Rights Reserved.</li>
                    
                </ul>
            </li>
        </ul>
          
        </div>
    </div>
  )
}

export default ScrollBox