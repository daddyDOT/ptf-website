import styles from './Card.module.css'
// eslint-disable-next-line react/prop-types
const Card = ({title, description}) => {
  return (
    <div className={`${styles.body} drop-shadow-md`}>
        <div className={styles.img}>
            <div className={styles.circle}>
                <p className={styles.datumbroj}>06</p>
                <p className={styles.datumnaziv}>JAN</p>
            </div>
            <div className={styles.square}></div>
        </div>
            <div className={styles.underimage}>
                <div className={styles.text}>
                    <h1 className={styles.header}>{title}</h1>
                    <p className={styles.description}>{description?.slice(0,64)+"..."}</p>
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