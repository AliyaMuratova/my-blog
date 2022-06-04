import React from 'react';

const AddItem = () => {
    const collectData = (event) => {
        event.preventDefault();

        const data = {
            imgUrl:event.target.imgUrl.value,
            productName:event.target.productName.value,
            productPrice:event.target.productPrice.value,
        }

        const options = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body:JSON.stringify(data)
        }
    }

    return (
        <div>
            <form action="" onSubmit={collectData}>
                <input name="imgUrl" type="text" placeholder="img url"/>
                <input name="productName" type="text" placeholder="Наименование товара"/>
                <input name="productPrice" type="text" placeholder="Цена товара"/>
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default AddItem;