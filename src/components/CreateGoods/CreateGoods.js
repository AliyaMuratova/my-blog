import React from 'react';
import {Link} from "react-router-dom";
import styles from './CreateGoods.module.css';

const url = 'http://localhost:3001/products';

const CreateGoods = ({products}) => {

    const deleteProduct = () => {
        const options = {
            method: 'DELETE'
        }
        fetch(url + '/' + 1, options)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div className={styles.product_table}>
            <table>
                <tr>
                    <th>Img</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>&nbsp;</th>
                </tr>
                    {
                        products.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td><img className={styles.card_img} src={item.img} alt=""/></td>
                                    <td>{item.name}</td>
                                    <td>$ {item.price}</td>
                                    <td>Удалить</td>
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