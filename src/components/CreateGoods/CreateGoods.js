import React from 'react';
import {Link} from "react-router-dom";
import styles from './CreateGoods.module.css';

const CreateGoods = ({products}) => {
    return (
        <div className={styles.product_table}>
            <table>
                <tr>
                    <th>Img</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                    {
                        products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><img className={styles.card_img} src={item.img} alt=""/></td>
                                    <td>{item.name}</td>
                                    <td>$ {item.price}</td>
                                </tr>
                            )
                        })
                    }
            </table>
            <div className={styles.buttons}>
                <Link to="/add-item">
                    <button>Добавить</button>
                </Link>
                <Link to="/products"><button>На главную</button></Link>
            </div>
        </div>
    );
};

export default CreateGoods;