import React from 'react';
import styles from './CartPage.module.css'
import {Link} from "react-router-dom";

const CartPage = () => {
    const cart = localStorage.getItem('cart')
    const cartProducts = JSON.parse(cart)
    return (
        <div className={styles.product_table}>
            {
                cartProducts === null ?
                (<div className={styles.empty_cart}>
                    <p>В корзине пусто</p>
                </div>):(
                        <table>
                            <tr>
                                <th>Img</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>&nbsp;</th>
                            </tr>

                            <tr>
                                <td><img className={styles.card_img} src={cartProducts.img} alt=""/></td>
                                <td>{cartProducts.name}</td>
                                <td>$ {cartProducts.price}</td>
                                <td style={{cursor: 'pointer'}}>Удалить</td>
                            </tr>

                        </table>
                    )
            }

            <div className={styles.buttons}>
                <Link to="/add-item">
                    <button>Оплатить</button>
                </Link>
                <Link to="/products">
                    <button>На главную</button>
                </Link>
            </div>
        </div>
    );
};

export default CartPage;