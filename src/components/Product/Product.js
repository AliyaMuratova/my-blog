import React from 'react';
import styles from './Product.module.css';

const Product = (props) => {
    return (
        <div className={styles.card}>
            <img src={props.img} alt="" className={styles.card_img} />
            <h4>{props.name}</h4>
            <p className={styles.desc}>{props.price}</p>

            <button className={styles.card_button}>Купить</button>
        </div>
    );
};

export default Product;