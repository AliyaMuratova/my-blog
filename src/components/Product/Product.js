import React from 'react';
import styles from './Product.module.css';

const Product = (props) => {

    let addToCart = () => {
        let productsFromLocalStorage = {};
        if (localStorage.getItem('cart')){
             productsFromLocalStorage = JSON.parse(localStorage.getItem('cart'));
        }

        const product = {}
        product[props.id]={
            ...props
        };

        localStorage.setItem('cart', JSON.stringify({...productsFromLocalStorage, ...product}))
    };

    return (
        <div className={styles.card}>
            <img src={props.img} alt="" className={styles.card_img} />
            <h4 className={styles.name}>{props.name}</h4>
            <p className={styles.price}>{props.price} сом</p>
            <button
                onClick={addToCart}
                className={styles.card_button}
            >Купить</button>
        </div>
    );
};

export default Product;