import React from 'react';
import {Link} from "react-router-dom";
import styles from './AddItem.module.css'

const url = "http://localhost:3001/products"

const AddItem = () => {
    const collectData = (event) => {
        event.preventDefault();

        const data = {
            img:event.target.img.value,
            name:event.target.name.value,
            price:event.target.price.value,
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(data)
        }
        fetch(url, options)
            .then(response => response.json())
            .then(data => console.log(data))
    }

    return (
        <div className={styles.add_form}>
            <h2>Добавить карточку товара</h2>
            <form action="" onSubmit={collectData}>
                <input name="img" type="text" placeholder="img url"/>
                <input name="name" type="text" placeholder="Наименование товара"/>
                <input name="price" type="text" placeholder="Цена товара"/>
                <button type="submit">Добавить</button>
                <Link to="/create-goods"><button>Назад</button></Link>
            </form>
        </div>
    );
};

export default AddItem;