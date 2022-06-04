import React, {useEffect, useState} from 'react';
import Product from "../Product/Product";
import {BASE_URL} from "../../constants";
import styles from './Products.module.css'

const Products = () => {
    const [products, setProducts] = useState([]);

    const getProducts = () => {
        fetch(BASE_URL + '/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }

    useEffect(getProducts, []);


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