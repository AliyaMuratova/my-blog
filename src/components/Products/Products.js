import React from 'react';
import Product from "../Product/Product";
import styles from './Products.module.css'

const Products = ({products}) => {
    return (
        <div className={styles.products}>
            <ul className={styles.product_cards}>
                {
                    products.map((item, index) => {
                        return (
                            <li className={styles.cards}>
                                <Product
                                    key={index}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Products;