import React from 'react'
import styles from "./Footer.module.css";
import { CiFacebook } from 'react-icons/ci';
import { FaFacebookSquare, FaInstagram } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';

const ScrollBox = () => {
  return (
    <div className={styles.footer}>
        <div className='max-w-6xl mx-auto px-5 w-full'>
        <div className={styles.footerGornji}>
            <div className={styles.gornjiLeft}>
                <h1 className>PTF.unze.ba</h1>
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
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11441.491362839326!2d17.9034519!3d44.1993869!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475ee2423fa0fbaf%3A0xd5caf50678c02195!2sPolitehni%C4%8Dki%20fakultet%20Univerziteta%20u%20Zenici!5e0!3m2!1shr!2sba!4v1717385117927!5m2!1shr!2sba" width="250" height="250" className='border-[0]' allowfullscreen="" loading="lazy"></iframe>
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
                </ul>
            </li>
            <li className={styles.treci}>
                <ul>
                    <li>2024. PTF Web dizajn projekat, Sva prava zadržana.</li>
                </ul>
            </li>
        </ul>
          
        </div>
        </div>
    </div>
  )
}

export default ScrollBox