import React from 'react';
import CreateGoods from "../../components/CreateGoods/CreateGoods";

const CreateGoodsPage = ({products}) => {
    return (
        <CreateGoods
            products={products}
        />
    );
};

export default CreateGoodsPage;