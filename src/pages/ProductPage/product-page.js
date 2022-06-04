import React from 'react';
import {Link} from "react-router-dom";
import Products from "../../components/Products/Products";
import styles from './product-page.module.css'

const ProductPage = ({products}) => {
    return (
        <>
            <Products
                products={products}
            />
            <Link to="/create-goods"><button className={styles.button}>Добавить товар</button></Link>
        </>
    );
};

export default ProductPage;