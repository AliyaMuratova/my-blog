import React from 'react';
import {Link} from "react-router-dom";

const CreateGoods = () => {
    return (
        <>
            <table>
                <tr>
                    <th>&nbsp;</th>
                    <th>Img</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </table>

            <Link to="/add-item"><button>Добавить</button></Link>
        </>
    );
};

export default CreateGoods;