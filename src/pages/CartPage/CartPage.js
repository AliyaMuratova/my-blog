import React from 'react';
import styles from './CartPage.module.css'
import {Link} from "react-router-dom";

const CartPage = () => {
    const cartItems = localStorage.getItem('cart')
        ? Object.values(JSON.parse(localStorage.getItem('cart')) )
        : []

    const deleteFromCart = (product) => {
        const updatedCart = cartItems.filter(cartProduct => cartProduct.id !== product.id)

        localStorage.setItem('cart', JSON.stringify(updatedCart))
    }


    return (
        <div className={styles.product_table}>
            <div className={styles.title}>
                <p>Корзина</p>
            </div>

            {
                cartItems.length === 0  ?
                    (<div className={styles.empty_cart}>
                        <p>В корзине пусто</p>
                    </div>) : (
                        <table>
                            <tbody>
                            <tr>
                                <th>#</th>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Delete</th>
                                <th>&nbsp;</th>
                            </tr>
                            {
                                cartItems.map((product, idx) => {
                                    return (
                                        <tr key={idx} className={styles.items}>
                                            <td>&nbsp;</td>
                                            <td><img className={styles.card_img} src={product.img} alt=""/></td>
                                            <td>{product.name}</td>
                                            <td>{product.price} сом</td>
                                            <td>{1}</td>
                                            <td onClick={() => deleteFromCart(product)} style={{cursor: 'pointer'}}>Удалить</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                        </table>
                    )
            }


            <div className={styles.buttons}>
                    <button>Оплатить</button>
                <Link to="/products">
                    <button>На главную</button>
                </Link>
            </div>
        </div>
    );
};

export default CartPage;