import React, { useEffect, useState } from 'react';
import ProductDataService from '../../../services/Product/index';
import ProductCard from '../Card/index';

const List = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        retrieveProducts();
    });

    const retrieveProducts = () => {
        ProductDataService.getAll()
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                // TODO: do something here
            });
    }

    const productCards = products.map(product => {
        return (
            <ProductCard product={product}/>
        );
    });

    return (
        <div className="row">
            {productCards}
        </div>
    );
};

export default List;
